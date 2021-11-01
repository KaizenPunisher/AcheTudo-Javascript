import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";

import api from '../../services/api';

import logoImg from '../../imagens/logo.png';

import styles from "./styles";

export default function Inicio(){
    const [empresa, setEmpresa] = useState([]);
    const [total, setTotal] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigateToEmpresa(empresa){
        navigation.navigate('Empresa', {empresa});
    }

    async function loadEmpresas(){
        if(loading) {
            return;
        }

        if (total > 0 && empresa.length == total) {
            return;
        }

        setLoading(true);

        const response = await api.get('empresa', {
            params: {page}
        });
        
        setEmpresa([ ...empresa, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    };

    useEffect(() => {
        loadEmpresas();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Image source={logoImg} />
                <Text style={styles.cabecalho}>
                    Total de <Text style={styles.cabecalhoTextBold}>{total} empresas</Text>
                </Text>
            </View>

            <Text style={styles.titulo}>Bem vindo!</Text>
            <Text style={styles.descricao}>Teste</Text>

            <FlatList
                data={empresa}
                style={styles.listaDeEmpresas}
                keyExtractor={empresa => String(empresa.id)}
                //showsVerticalScrollIndicator={false}
                onEndReached={loadEmpresas}
                onEndReachedThreshold={0.2}
                renderItem={({ item: empresa }) => (
                    <View style={styles.empresa}>
                        <Text style={styles.descricaoDaEmpresa}>Empresa:</Text>
                        <Text style={styles.descricaoValor}>{empresa.razao_social}</Text>

                        <Text style={styles.descricaoDaEmpresa}>ID:</Text>
                        <Text style={styles.descricaoValor}>{empresa.id}</Text>

                        <TouchableOpacity 
                            style={styles.descricaoButton} 
                            onPress={() => navigateToEmpresa(empresa)}
                        >
                            <Text style={styles.descricaoButtonText}>Ver mais detalhes</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}