import React, {Component} from 'react'
import {View, Image, Text , StyleSheet, Dimensions, TouchableOpacity, Linking} from 'react-native'

const {width,height} = Dimensions.get('window');

import location_icon from '../../assets/contact/location_icon.png'
import open_time from '../../assets/contact/open_time.png'
import facebook_contact_icon from '../../assets/contact/facebook_contact_icon.png'
import instagram_contact_icon from '../../assets/contact/instagram_contact_icon.png'
import twiter_contact_icon from '../../assets/contact/twiter_contact_icon.png'
import youtube_contact_icon from '../../assets/contact/youtube_contact_icon.png'

import welcome_text_background from "../../assets/WelcomeTextBackground.png";
import Def from "../../val/Def";
import store_welcome_image from "../../assets/Store_welcome.png";

import HeaderSimple from  "../com/HeaderSimple"


export default class ContactScreen extends Component{
    render(){
        const {container , headerStyle, rightButton , content,paragraph , simulation, simulationImage, storeImage, headerItem ,
            titleHeader , messageHeader, titleText, messageText , locationItem, icon , timeItem, listContact} = styles;
        return(
            <View style={container}>

                <HeaderSimple title={Def.CONTACT_TITLE}/>

                <View style={content}>
                    <View style={headerItem}>
                        <View style={titleHeader}>
                           <Text style = {titleText}>
                               GET IN TOUCH
                           </Text>
                        </View>
                        <View style={messageHeader}>
                            <Text style = {messageText} >
                                We are also active in social media
                            </Text>
                            <Text style = {messageText}>
                                You can find us on below adresses.
                            </Text>
                        </View>
                    </View>


                    <View style={locationItem}>
                        <View style={icon}>
                            <Image source={location_icon} style={{width : 31, height:40}}/>
                        </View>
                        <View style={messageHeader}>
                            <Text style = {messageText} >
                                Office
                            </Text>
                            <Text style = {messageText} >
                                109 Tran Hung Dao Street,
                            </Text>
                            <Text style = {messageText}>
                                Hoan Kiem District,Hanoi
                            </Text>
                        </View>
                        <View style={messageHeader}>
                            <Text style = {messageText} >
                                Shop
                            </Text>
                            <Text style = {messageText} >
                                A-1 Aeon Long Bien, Co Linh, Hanoi
                            </Text>
                            <Text style = {messageText}>
                                No 14,Dinh Cong, Hanoi
                            </Text>
                        </View>
                    </View>

                    <View style={timeItem}>
                        <View style={icon}>
                            <Image source={open_time} style={{width : 35, height:35}}/>
                        </View>
                        <View style={messageHeader}>
                            <Text style = {messageText} >
                                Opening Hour 8:00 AM - 10:00 PM
                            </Text>
                            <Text style = {messageText}>
                                Monday - Sunday
                            </Text>
                        </View>
                        <View style={messageHeader}>
                            <Text style = {messageText} >
                                Hotline. 028 68 666 888
                            </Text>
                            <Text style = {messageText}>
                               E-mail. contact@chteraise.com
                            </Text>
                            <View style ={listContact}>
                                <TouchableOpacity onPress = {() => Linking.openURL("https://www.facebook.com/")}>
                                <Image source={facebook_contact_icon} style={[{ marginHorizontal:8  },{width : 40, height:40}]}/>
                                 </TouchableOpacity>
                                <TouchableOpacity onPress = {() => Linking.openURL("https://www.facebook.com/")}>
                                <Image source={instagram_contact_icon} style={[{marginHorizontal:8},{width : 40, height:40}]}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress = {() => Linking.openURL("https://www.facebook.com/")}>
                                <Image source={twiter_contact_icon} style={[{marginHorizontal:8},{width : 40, height:40}]}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress = {() => Linking.openURL("https://www.facebook.com/")}>
                                <Image source={youtube_contact_icon} style={[{marginHorizontal:8},{width : 40, height:40}]}/>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>


                    <View style = {storeImage}>
                        <Image source={store_welcome_image} style={{width : width * 1.1 , height : width * 425 / 1239 * 1.1}} />
                    </View>

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

    headerStyle: {
        width : width,
        height : height * 0.075,
        flexDirection : 'row',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    rightButton : {
        position: 'absolute',
        right : 20
    },
    content : {
        marginTop : height * 0.02,
        height : height * 0.9 + 50,
        backgroundColor : '#4d1c36',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    paragraph : {
        paddingHorizontal: 5,
    },
    simulation : {
        marginVertical : 20,
        flexDirection: 'row',
        alignItems : 'center',
    },
    simulationImage : {
        marginHorizontal:5,
    },
    storeImage : {
        position: 'absolute',
        bottom: 10,
    },

    headerItem: {
       marginTop : 0
    } ,
    titleHeader : {
        marginTop : 20,
        alignItems : 'center'
    } ,

    titleText : {
        color : '#ffffff',
        fontSize : 18,
    },

    messageHeader : {
        marginTop: 15,
        alignItems : 'center'
    },
    messageText : {
        color : '#ffffff',
        fontSize : 16,
    },
    locationItem : {
        marginTop :15,
        alignItems : 'center'
    },
    icon : {

    },
    timeItem: {
        marginTop :15,
        alignItems : 'center'
    },
    listContact : {
        marginTop : 10,
        flexDirection : 'row',
        alignItems : 'center'
    }

});