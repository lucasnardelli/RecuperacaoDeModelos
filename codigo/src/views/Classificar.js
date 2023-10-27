import React, { useState } from "react"
import {Text, StyleSheet, SafeAreaView, View, Image, TouchableOpacity } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'

import DropdownComponent from "../components/DropdownComponent";

export default () => {
    const [imgURL, setImgURL] = useState('')
    const isFocused = useIsFocused()
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.view}>
                <View style={styles.viewTitle}>
                    <Text style={styles.textTitle}>Classi1ficar</Text>
                </View>
            </View>
            <View style={styles.mainView}>
                { isFocused ? 
                    <DropdownComponent />
                 : 
                    <DropdownComponent />
                }
                
                
                <>
                    {imgURL !== '' ?
                        <Image
                            style={styles.imagem}
                            source={{ uri: imgURL }}
                            resizeMode="contain"
                        />
                        :   
                        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => openCamera()}>
                            <Text style={styles.text}>Selecione uma imagem</Text>
                            <Ionicons name="image-outline" size={250}/>
                        </TouchableOpacity>
                    }
                </> 
                
                
                <TouchableOpacity style={styles.button} 
                    onPress={() => {navigation.navigate('Foto')}}
                    >
                    <Text style={styles.textButton}>Classificar</Text>
                </TouchableOpacity>
                
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    view: {
        borderBottomColor: '#a0a0a0',
        borderBottomWidth: 1,
    },
    viewTitle: {
        padding: 15,
        alignItems: 'center',
    },
    textTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5cc6ba'
    },
    text: {
        fontSize: 25,
        lineHeight:58,
        fontWeight: 'bold',
    },
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    button: {
        backgroundColor: '#5CC6BA',
        marginVertical: 5,
        padding: 15,
        width: '40%',
        borderRadius: 15,
        alignItems: 'center',
    },
    textButton: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        backgroundColor: '#E1E5E4',
        marginVertical: 5,
        padding: 15,
        width: '90%',
        fontSize: 20,
        borderRadius: 30
    },
    cameraPosition: {
        position: 'absolute',
        top: 75,
        left: 25,
    },
    galeriaPosition: {
        position: 'absolute',
        top: 75,
        right: 25,
    },
    imagem: {
        width: '95%',
        height: 350,
        alignSelf: 'center',
        marginTop: 50,
    }
})