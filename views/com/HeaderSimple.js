import React, {Component} from 'react'
import  {View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView, StatusBar} from 'react-native'

const {width, height} = Dimensions.get('window');

export default class HeaderSimple extends Component {

    onSearchBtnClick() {

    }

    render () {
        const {headerStyle,rightButton, titleStyle, okButtonStyle} = styles;
        return (
            <View>
                <StatusBar
                    color="blue"
                    barStyle="dark-content"
                />
                <View style={headerStyle}>
                    <Text style={titleStyle}>{this.props.title}</Text>
                    <TouchableOpacity style={rightButton} >
                        <Text style={okButtonStyle}>OK</Text>
                    </TouchableOpacity>

                </View>
            </View>)
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        width : width,
        height : height * 0.08,
        flexDirection : 'row',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop : 20,
    },

    rightButton : {
        position: 'absolute',
        right : 20,
        bottom : 10,
    },
    titleStyle:{
        fontSize : 15,
    },
    okButtonStyle : {
    }

});