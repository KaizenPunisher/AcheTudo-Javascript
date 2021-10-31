import React from "react";
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";

import logoImg from '../../imagens/logo.png';

import styles from "./styles";

export default function Inicio(){
    const navigation = useNavigation();

    function navigateToEmpresa(){
        navigation.navigate('Empresa');
    }

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Image source={logoImg} />
                <Text style={styles.cabecalho}>
                    Total de <Text style={styles.cabecalhoTextBold}>0 empresas</Text>
                </Text>
            </View>

            <Text style={styles.titulo}>Bem vindo!</Text>
            <Text style={styles.descricao}>Teste</Text>

            <FlatList
                data={[1, 2, 3, 4, 5]}
                style={styles.listaDeEmpresas}
                keyExtractor={listaDeEmpresas => String(listaDeEmpresas)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.empresa}>
                        <Text style={styles.descricaoDaEmpresa}>Empresa:</Text>
                        <Text style={styles.descricaoValor}>Padaria</Text>

                        <Text style={styles.descricaoDaEmpresa}>Nome Fantasia:</Text>
                        <Text style={styles.descricaoValor}>Padaria 1</Text>

                        <Text style={styles.descricaoDaEmpresa}>Nome:</Text>
                        <Text style={styles.descricaoValor}>José</Text>

                        <Text style={styles.descricaoDaEmpresa}>ID:</Text>
                        <Text style={styles.descricaoValor}>555555</Text>

                        <Text style={styles.descricaoDaEmpresa}>Endereço:</Text>
                        <Text style={styles.descricaoValor}>Rua 15</Text>

                        <TouchableOpacity 
                            style={styles.descricaoButton} 
                            onPress={navigateToEmpresa}
                        >
                            <Text style={styles.descricaoButtonText}>Ver mais detalhes</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            
        </View>
    );
}