import React, { useContext, useState } from "react"
import { SafeAreaView, View, StyleSheet, TextInput, ScrollView, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { useIsFocused } from '@react-navigation/native';

import Header from '../components/Header'
import Models from '../components/Models'

export default props => {

    const navigation = useNavigation()
    const isFocused = useIsFocused();

    const [filtro, setFiltro] = useState({
        nome: '',
        x: true,
        y: false,
    })
    
    return (
    <SafeAreaView style={styles.safeArea}>
        <Header style={styles.header}/>
        <View style={styles.viewSearch}>
            <TextInput value={filtro.nome} placeholder="Pesquise por um modelo" placeholderTextColor="#000" style={styles.textSearch} onChangeText={ nome =>
                setFiltro({nome: nome, x: !filtro.x, y: !filtro.y})
            }/>
            <Ionicons name="search" color='#A0A0A0' size={35}/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
            {   
                filtro.nome === '' ?

                <>
                    <Models nomeIcon="cloud" text="Models Store" filtro={filtro} navigation={navigation}/>
                    <Models nomeIcon="folder-open" text="Sua Biblioteca" style={styles.mrgin} filtro={filtro} navigation={navigation}/>
                </>
                :
                    filtro.x ? 
                    <>
                        <Models nomeIcon="cloud" text="Models Store" filtro={filtro} navigation={navigation}/>
                        <Models nomeIcon="folder-open" text="Sua Biblioteca" style={styles.mrgin} filtro={filtro} navigation={navigation}/>
                    </>
                    :
                    <>
                        <Models nomeIcon="cloud" text="Models Store" filtro={filtro} navigation={navigation}/>
                        <Models nomeIcon="folder-open" text="Sua Biblioteca" style={styles.mrgin} filtro={filtro} navigation={navigation}/>
                    </>
                
            }
        </ScrollView>
        
        
    </SafeAreaView>
)}

const styles = StyleSheet.create({
    safeArea:{ 
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    header: {
        borderBottomColor: '#E1E5E4',
        borderBottomWidth: 1
    },
    viewSearch: {
        backgroundColor: '#E1E5E4',
        flexDirection: 'row',
        marginTop: 30,
        width: '90%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-around'

    },
    textSearch: {
        color: '#4F4F4F',
        fontSize: 20,
    },
    mrgin: {
        marginBottom: 20,
    },
    scrollView: {
        width: '90%',
    }
})