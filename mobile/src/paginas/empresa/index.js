import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Image, TouchableOpacity, Text, Linking } from "react-native";
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../imagens/logo.png';

import styles from './styles';

export default function Empresa(){
    const navigation = useNavigation();
    const mensagem = 'Ola Padaria pão queimado, estou querendo comprar alguns pães';

    function voltar(){
        navigation.goBack()
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: 'Empresa: Padaria pão queimado',
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
                <Text style={styles.descricaoDaEmpresa}>Empresa:</Text>
                <Text style={styles.descricaoValor}>Padaria</Text>

                <Text style={styles.descricaoDaEmpresa}>Nome Fantasia:</Text>
                <Text style={styles.descricaoValor}>Padaria 1</Text>

                <Text style={styles.descricaoDaEmpresa}>Nome:</Text>
                <Text style={styles.descricaoValor}>José</Text>
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