import { useFonts } from 'expo-font';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SettingsScreen(){

    const [fontsLoaded] = useFonts({
        'Urbanist-Light': require('../../assets/fonts/Urbanist-Light.ttf'),
    });

    if(!fontsLoaded){
        return null;
    }


    return (
        <View style = {styles.mainScreen}>
            <Text style={styles.text}>APPEARANCE</Text>
            <View style = {styles.smallBlackPill}>
                <Text style = {styles.textInside}>Dark Mode</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainScreen: {
        backgroundColor: '#A1DAE1',
        flex: 1,
        justifyContent: 'flex-start',
        padding: 10,
    },
    text: {
        color: 'black',
        fontFamily: 'Urbanist-Light',
        fontSize: 14,
        marginLeft: 10,
    },
    smallBlackPill:{
        flex: 0.05121,
        backgroundColor: 'black',
        borderWidth: 2,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginTop: 5,
        marginLeft: 7,
        padding: 5,
    },
    textInside: {
        color: 'white',
        fontFamily: 'Urbanist-Light',
        fontSize: 15,
    },
});