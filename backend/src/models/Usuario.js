const connection = require('../database/connection');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const mailer = require('../modulos/mailer');

class Usuario {
    constructor({nome, email, email_token, senha, token}){
        this.nome                = nome
        this.email               = email
        this.email_token         = email_token
        this.senha               = senha
        this.senha_reset_token   = token
    }

    async listar(){
        try {
            const listagem = await connection('usuarios').select('*');
            return listagem;
        } 
        catch (error) {
            return error;
        } 
        finally {
            connection.destroy;
        }
    }

    async encontrar(email){
        const usuario = await connection('usuarios').where('email', email).first();
        return usuario;
    }

    async cadastrar() {
        const id = crypto.randomBytes(4).toString('HEX');
        this.id = id;
        const password_hash = await bcrypt.hash(this.senha, 8);
        this.senha = password_hash;

        this.email_token = crypto.randomBytes(2).toString('hex');
        const emailToken = this.email_token;

        try {
            const [cadastro] = await connection('usuarios').insert({
                id: this.id,
                nome: this.nome,
                email: this.email,
                email_verificado: false,
                email_token: this.email_token,
                password_hash: this.senha,
            }).returning('id');
    
            mailer.sendMail({
                to:       this.email,
                from:     'contato@achetudotiradentes.com.br',
                subject:  'Ative seu cadastro no Achetudo (Não responda esse email)',
                template: 'auth/ativacaoemail',
                context:  {emailToken},
            }, (err) => {
                if (err)
                    return { error: 'Não foi possivel enviar codigo'};
            });
    
            return {id: cadastro};
        } 
        catch (error) {
            return error;
        } 
        finally {
            connection.destroy;
        }
    }

    async reenviarCodigo(){
        const [usuario] = await connection('usuarios')
            .select('email_token')
            .where('email', this.email)
        ;

        const emailToken = usuario.email_token;

        console.log()
        if(!usuario){
            return { mensagem: 'Usuario não encontrado' };
        }

        if(usuario.email_verificado === true){
            return { mensagem: 'Conta ja está ativa' };
        }
        
        mailer.sendMail({
            to:       this.email,
            from:     'contato@achetudotiradentes.com.br',
            subject:  'Ative seu cadastro no Achetudo (Não responda esse email)',
            template: 'auth/ativacaoemail',
            context:  {emailToken},
        }, (err) => {
            if (err)
                return { error: 'Não foi possivel enviar codigo'};
        });
        console.log(emailToken)
        return { mensagem: 'Codigo enviado' };
    }

    async ativar() {
        try {
            const [usuario] = await connection('usuarios')
            .select('email_verificado', 'email_token')
            .where('email', this.email)
            ;
            if(!usuario){
                return { mensagem: 'Usuario não encontrado' };
            }
    
            if(this.email_token !== usuario.email_token){
                return { mensagem: 'Token invalido' };
            }
    
            if(usuario.email_verificado === true){
                return { mensagem: 'Conta ja está ativa' };
            }
    
            await connection('usuarios').where('email', this.email).update({
                email_verificado:     'true',
            });
            return { mensagem: 'Email ativado com sucesso' };
        } 
        catch (error) {
            return error;
        } 
        finally {
            connection.destroy;
        }
    }

    async esqueciSenha(){
        const usuario = await connection('usuarios').where('email', this.email).first();
        
        if(!usuario){
            return { mensagem: 'Usuario não encontrado' };
        }
        
        const senhaResetToken = crypto.randomBytes(20).toString('hex');

        const senhaResetExpiracao = new Date();
        senhaResetExpiracao.setHours(senhaResetExpiracao.getHours() + 1);
        
        await connection('usuarios').where('email', this.email).update({
            senha_reset_token:     senhaResetToken,
            senha_reset_expiracao: senhaResetExpiracao,
        });

        mailer.sendMail({
            to:       this.email,
            from:     'contato@achetudotiradentes.com.br',
            subject: 'Esqueci a senha (Não responda esse email)',
            template: 'auth/esqueciasenha',
            context:  {senhaResetToken},
        }, (err) => {
            if (err)
                return { error: 'Não foi possivel enviar recuperação de senha'};
        });
        
    }

    async resetSenha(){
        const nowUpdate = new Date();
        await connection('usuarios').where('email', this.email).update({
            now: nowUpdate,
        });

        const [usuario] = await connection('usuarios')
            .select('senha_reset_token', 'senha_reset_expiracao', 'now')
            .where('email', this.email);

        if(!usuario){
            return { error: 'Usuario não encontrado' };
        }
        //console.log(usuario.now);

        if(this.senha_reset_token !== usuario.senha_reset_token){
            return { error: 'Token invalido' };
        }

        if(usuario.now > usuario.senha_reset_expiracao){
            return { error: 'Token inspirou, faça um novo' };
        }
        
        const password_hash = await bcrypt.hash(this.senha, 8);
        this.senha = password_hash;
        await connection('usuarios').where('email', this.email).update({
            password_hash: this.senha,
        });
        
        return { menssagem: 'Senha trocada com sucesso' };
    }

    async gerarToken(email){
        const usuario = await connection('usuarios').where('email', email).select('*');
        //this.id = usuario.id;
        //console.log(usuario);
        return jwt.sign({ id: usuario.id }, process.env.APP_SECRET);
    }
}

module.exports = Usuario;