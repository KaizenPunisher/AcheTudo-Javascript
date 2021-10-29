import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 28,

    },

    cabecalho: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    cabecalhoText: {
        fontSize: 15,
        color:'#737380',
    },

    cabecalhoTextBold: {
        fontWeight: 'bold'
    },

    titulo: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color:'#13131a',
        fontWeight: 'bold'
    },

    descricao: {
        fontSize: 16,
        lineHeight: 74,
        color: '#737380'
    },

    listaDeEmpresas: {
        marginTop: 0,
    },

    empresa: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    descricaoDaEmpresa: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    descricaoValor: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
    
    },

    descricaoButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    descricaoButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold',
    },
});