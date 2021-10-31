import { StyleSheet } from "react-native";
import { Constants } from "expo-constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
    },

    cabecalho: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    empresa: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginTop: 16,
    },

    descricaoDaEmpresa: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    descricaoValor: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
    },

    contacBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginTop: 16,
    },

    whatsappTitulo: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },

    whatsappDescricao: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width:'48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },


});