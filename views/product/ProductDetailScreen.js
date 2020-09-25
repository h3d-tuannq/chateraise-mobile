import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, FlatList, Image, ScrollView} from 'react-native'
import {createStackNavigator , createAppContainer } from 'react-navigation'

const {width, height} = Dimensions.get('window')

import add_cart_detail from '../../assets/add_cart_detail.png'
import best_seller_icon from '../../assets/best_seller_icon.png'
import product_detail_image from '../../assets/demo/product_detail_demo.jpg'

import Header from "../com/Header";
import Def from "../../val/Def";
import sp2 from "../../assets/demo/sp2.jpg";
import Swiper from "react-native-swiper";

const model =  {
    image : product_detail_image,
    name : 'Crème Blulee',
    description : 'Rất tự tin trước trận nhưng khi bị ĐT Việt Nam đánh bại, bàn cãi. Rất khó khăn để chơi với họ. Tôi không hạnh phúc hôm nay',
    price : 1000,
    best_sale : true,
    imgs :
        [
            {
                image : product_detail_image,
                des : 'abc'
            },
            {
                image : product_detail_image,
                des : 'fabc'
            }
        ],
};


export default class ProductDetailScreen extends Component {

    constructor(props){
        super(props);
    }

    gotoDetail(){
        this.props.navigation.navigate('ProductDetail');
    }

    render () {
        const {container,itemWraper , productDetailStyle, productImage,best_seller_style, productInfo , productNameStyle,
            productPriceStyle, productDescriptionStyle, oderButton , descriptionStyle, imageStyle
        } = styles;

        return (
            <ScrollView style={{flex: 1}}>
                <View style={container} >
                    <Header displaySearch={true} title={Def.PRODUCT_TITLE}/>
                    <View style={productDetailStyle}>
                      {/*  <Image source={model.image} style={productImage}/>*/}

                        <Swiper width={width} height = {1.2* width} autoplay = {true}  >
                            {
                                model.imgs.map((e ,i) => {
                                        return ( <View key ={i+e.des}   >
                                            <Image source={{uri : 'https://ameovat.com/wp-content/uploads/2016/02/cach-lam-banh-kem-sinh-nhat-1.jpg'}}  style={imageStyle}/>
                                        </View>)
                                    }
                                )
                            }
                        </Swiper>


                        {
                            model.best_sale
                                ? <Image source={best_seller_icon} style={best_seller_style} /> : <View/>

                        }
                    </View>
                    <View style={productInfo}>
                        <Text style={productNameStyle}>
                            {model.name}
                        </Text>
                        <ScrollView style={descriptionStyle}>
                            <Text style={productDescriptionStyle}>
                                {model.description}
                            </Text>
                        </ScrollView>
                        <Text style={productPriceStyle}>
                            {model.price} vnđ
                        </Text>
                        <TouchableOpacity style={oderButton}>
                            <Text style={{color : '#fff', paddingHorizontal: 3, fontSize : 15, fontWeight: 'bold'}}>Cho vào giỏ</Text>
                            <Image source={add_cart_detail} style={{width:17, height : 16, marginTop : 2, marginLeft: 3 }}/>
                        </TouchableOpacity>

                    </View>

                </View>
            </ScrollView>)
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems: 'center',
    },
    productDetailStyle : {
        alignItems: 'center',
        height : width* 1.2,
    },
    productInfo : {
        width : 0.92 * width,
    },

    productListStyle : {
        marginTop : 15,
        width : width * 0.95,
        alignItems : 'center'
    }
    ,
    itemWraper : {
        width : width * 0.45,
        justifyContent: 'center' ,
        margin:1,
        borderWidth: 1,
        borderColor : '#4d1c36',
        paddingVertical: 8,
    },
    productNameStyle : {
        marginTop : 10,
        fontWeight: 'bold',
        fontSize : 18,
    },
    productPriceStyle : {
        marginTop : 10,
        fontWeight: 'bold',
        fontSize : 15,
    },

    productDescriptionStyle : {
        marginTop : 10,
        fontSize : 14,
        color : '#dcdcdc',
    },

    productImage : {
        width : width,
        height :width * 1.2,
    },
    add_cart_style : {
        width : 25,
        height : 25,
    }
    ,
    add_cart_style_container : {
        position: 'absolute',
        right : 10,
        bottom : 5,
    },
    best_seller_style : {
        position: 'absolute',
        top : 20,
        left : 20,
        width : 50,
        height : 50,
    },
    oderButton : {
        marginTop :10,
        width : 115,
        height :30,
        flexDirection: 'row',
        backgroundColor : '#4d1c36',
        borderRadius:4,
        padding: 3,
    },
    descriptionStyle : {
        maxHeight: 65,
        minHeight: 22,
    },
    imageStyle : {
        height : width *1.2,
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    },

});