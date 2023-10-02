import React from "react"
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useNavigation, useRoute } from '@react-navigation/native'

import Header from "../components/Header"
import Estrelas from "../components/Estrelas"

function toggleBiblioteca (navigation, route) {
    route.params.downloaded = !route.params.downloaded
    navigation.navigate('Navigate')
}

export default () => {
    const navigation = useNavigation()
    const route = useRoute()
    return (
        <SafeAreaView style={styles.safe}>
            <View>
                <Header style={styles.header}/>
                <View style={styles.container}> 
                    <Image source={route.params.imagem} style={styles.image}/>
                    <View style={styles.nomeView}>
                        <Text style={styles.nome}>{route.params.nome}</Text>
                        <Estrelas quantidade={route.params.estrelas} />
                    </View>
                </View>
                <Text style={styles.desc}>{route.params.descricao}</Text>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={() => toggleBiblioteca(navigation, route)}>
                    <Text style={styles.textButton}>{!route.params.downloaded ? "Adicionar à biblioteca" : "Remover da biblioteca"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {
                                navigation.goBack()}}>
                    <Text style={styles.textButton}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safe: {
        height: '100%',
        justifyContent: 'space-between',
    },
    header: {
        borderBottomColor: '#a0a0a0',
        borderBottomWidth: 1,
    },
    container : {
        marginTop: 30,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    image: {
        width: 140,
        height: 140,
    },
    nomeView: {
        flex: 1,
        alignItems: 'center',
        marginLeft: 10,
    },
    nome: {
        color: '#4F4F4F',
        fontSize: 42,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    desc: {
        color: '#4A4A4A',
        fontSize: 21,
        textAlign: 'justify',
        marginTop: 20,
        marginHorizontal: 15,
    },
    buttonView: {
        width: '100%',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#5CC6BA',
        marginVertical: 5,
        padding: 15,
        width: '60%',
        borderRadius: 15,
        alignItems: 'center',
    },
    textButton: {
        fontSize: 20,
        color: '#FFF'
    },
})