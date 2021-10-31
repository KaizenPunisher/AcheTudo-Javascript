import React from "react";
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, TouchableOpacity, Text, Linking } from "react-native";
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../imagens/logo.png';

import styles from './styles';

export default function Empresa(){
    const navigation = useNavigation();

    const route = useRoute();
    const empresa = route.params.empresa;

    function voltar(){
        navigation.goBack()
    }

    const mensagem = `Ola ${empresa.nome_fantasia}, estou querendo comprar alguns pães`;

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Empresa: ${empresa.nome_fantasia}`,
            recipients: ['oscar.gomes.junior@hotmail.com'],
            body: mensagem,
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`tg://resolve?domain=oscarkaizen&text?msg=${mensagem}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Image source={logoImg} />
                
                <TouchableOpacity onPress={voltar}>
                    <Text name="voltar" size={28} color="#e82041"> VOLTAR </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.empresa}>
                <Text style={styles.descricaoDaEmpresa}>Razão Social:</Text>
                <Text style={styles.descricaoValor}>{empresa.razao_social}</Text>

                <Text style={styles.descricaoDaEmpresa}>CNPJ:</Text>
                <Text style={styles.descricaoValor}>{empresa.cnpj}</Text>

                <Text style={styles.descricaoDaEmpresa}>Ponto de referência:</Text>
                <Text style={styles.descricaoValor}>{empresa.endereco_descricao}</Text>
            </View>

            <View style={styles.contacBox}>
                <Text style={styles.whatsappTitulo}> WHATSAPP </Text>
                <Text style={styles.whatsappDescricao}> Entre em contato! </Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}