import React, {Component} from 'react'
import  {View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView, StatusBar} from 'react-native'

const {width, height} = Dimensions.get('window');

import cart_icon from '../../assets/header/cart_icon.png'
import user_info_icon from '../../assets/header/user_info_icon.png'
import iconSearch from '../../assets/header/search_icon.png'



export default class Header extends Component {

    onSearchBtnClick() {

    }

    render () {
        const {headerStyle,titleStyle,rightButtonGroup, rightButtonItem, numberProductCart, searchBtnContainer, searchIconStyle} = styles;

        const searchIconJSX = this.props.displaySearch ? ( <TouchableOpacity style={searchBtnContainer} onPress={this.onSearchBtnClick.bind(this)} >
            <Image source={iconSearch} style={searchIconStyle}/>
        </TouchableOpacity>) : <View></View>;

        return (
            <View>
                <StatusBar
                    color="blue"
                    barStyle="dark-content"
                />
                <View style={headerStyle}>
                    {searchIconJSX}
                    <Text style={titleStyle}>{this.props.title}</Text>


                    <View style = {rightButtonGroup}>
                        <TouchableOpacity style = {rightButtonItem}>
                            <Image source={cart_icon} style={{width : 31, height : 26 }}  />
                            <Text style={numberProductCart}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {rightButtonItem}>
                            <Image source={user_info_icon} style={{width : 26, height : 26 }}  />
                        </TouchableOpacity>
                    </View>
                </View>



            </View>)
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        paddingTop : 15,
        width : width,
        height : height * 0.09,
        flexDirection : 'row',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleStyle : {
        fontWeight: 'bold',
        color : '#4d1c36',
        fontSize : 18
    },
    rightButtonGroup : {
        flexDirection : 'row',
        alignItems : 'center',
        position: 'absolute',
        right : 10,
        bottom: 10,
    },

    rightButtonItem : {
        paddingVertical: 2,
        paddingHorizontal: 5,
    },
    numberProductCart : {
        position : 'absolute',
        fontSize : 10,
        right: 8,
        bottom: 2,
        color: '#fff'
    },
    searchIconStyle : {
        width:25,
        height : 26,
        paddingVertical: 2,
        paddingHorizontal: 5,
    },
    searchBtnContainer : {
        position: 'absolute',
        left : 10,
        bottom : 10,
        alignItems : 'center',
    },

});