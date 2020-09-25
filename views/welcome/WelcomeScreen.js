import React, {Component} from 'react';
import {Text, Image, StyleSheet, TouchableOpacity, Dimensions, View} from 'react-native'
import Def from '../../val/Def'

const {width, height} = Dimensions.get('window');

import welcome_image from '../../assets/Welcome.png'
import store_welcome_image from '../../assets/Store_welcome.png'
import welcome_text_background from '../../assets/WelcomeTextBackground.png'




export default class WelcomeScreen extends Component{
    render() {
        const { welcomeMessage , welcomeImage , storeImage , welcomeView} = styles;

        return (
        <View style={styles.container}>
            <View style = {welcomeImage}>
                <Image source={welcome_image} style={{width : width * 0.65, height : width * 425 / 1239 * 0.65 }} />
            </View>

            <View style = {storeImage}>
                <View style={welcomeView} >
                    <Image source={welcome_text_background} style = {{width : width * 0.6, height : width * 0.6 * 147 / 633}}/>
                    <Text style = {welcomeMessage} >{Def.WELCOME_MESSAGE}</Text>

                </View>

                <Image source={store_welcome_image} style={{width : width * 1.3 , height : width * 425 / 1239 * 1.3}} />
            </View>

        </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4d1c36',
        alignItems: 'center',
    },

    welcomeImage : {
        marginTop: height * 0.35,
    },

    storeImage : {
        position: 'absolute',
        bottom: 50,
    },

    welcomeMessage : {
       position: 'absolute',
       paddingBottom: 20 ,color:'#fff', fontSize : 22, textAlign : 'center', paddingVertical: 8,
    },

    welcomeView : {
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }

});