import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Image , FlatList} from 'react-native'

import Swiper from 'react-native-swiper';

import fringe_image from '../../assets/fringe_image.png'

import first_product from '../../assets/demo/1st_pro.jpg'
import second_product from '../../assets/demo/2nd.jpg'
import third_product from '../../assets/demo/3rd.jpg'

import sale_first from '../../assets/rating-sale/sale_first.png'
import sale_second from '../../assets/rating-sale/sale_second.png'
import sale_third from '../../assets/rating-sale/sale_third.png'

import second_baner from '../../assets/demo/second_banner.jpg'

import sp1 from '../../assets/demo/sp1.jpg'
import sp2 from '../../assets/demo/sp2.jpg'
import sp3 from '../../assets/demo/sp3.jpg'


import Header from '../../views/com/Header'
import Def from "../../val/Def";

const productList  = [
    {
        image : sp1,
        name : 'image1',
        price : 1000
    },
    {
        image : sp2,
        name : 'image2',
        price : 1000
    },
    {
        image : sp3,
        name : 'image3',
        price : 1000
    },
    {
        image : sp1,
        name : 'image4',
        price : 1000
    },
    {
        image : sp2,
        name : 'image5',
        price : 1000
    },
    {
        image : sp3,
        name : 'image6',
        price : 1000
    }
];

const slideimages = [
    {
        image : 'https://images.unsplash.com/photo-1529994476526-5a7f0737d5f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=02f63c8c24283a890a633460f225dc6e&auto=format&fit=crop&w=750&q=80',
        name : 'sp1',
    },
    {
        image : 'https://images.unsplash.com/photo-1507066274042-8a683a1e6ffe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c165bb7b6ea6d38be38b6998a2fbba9&auto=format&fit=crop&w=750&q=80',
        name : 'sp2',
    }
];

const {width, height} = Dimensions.get('window');

const imageWidth = width;
const imagetHeight = 250;

export default class HomeScreen extends Component {
    render () {
        const {fringe, imageStyle, cateTitle, container, mainContent, topSaleList , topSaleContainer , ratingStyle ,topProductItem , secondBaner , topProductImage,
            mainProduct,productNavigate , itemWraper, productNameStyle, productPriceStyle, polixy, textPolixy} = styles;
        return (
        <View>
           <Header title={Def.APP_NAME} />
            <ScrollView style={{height : height * 0.9}}>
                 {/*Slider*/}
                <View>
                    <Swiper width={imageWidth} height = {imagetHeight} autoplay = {true}  showsButtons = {true} >
                        {
                            slideimages.map((e ,i) => {
                                   return ( <TouchableOpacity key ={i+e.name} style={container} onPress={() => this.gotoListProduct(e)} >
                                        <Image source={{uri: `${e.image}`}} style={imageStyle}/>
                                        <Text style={cateTitle}>{e.name}</Text>
                                    </TouchableOpacity>)
                                }
                            )
                        }
                    </Swiper>
                    <View style = {fringe}>
                        <Image source={fringe_image} style={{width : width, height : width * 32 /831}}/>
                    </View>
                </View>

                <View style={mainContent}>
                    <View style = {topSaleContainer}>
                        <View style = {{width : 0.92 * width, paddingVertical: 3}}>
                            <Text>Top sale</Text>
                        </View>

                        <View style = {topSaleList}>
                            <TouchableOpacity style={topProductItem}>
                                <View>
                                    <Image source={first_product} style={topProductImage}/>
                                    <Image source={sale_first} style={ratingStyle}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={topProductItem}>
                                <View>
                                    <Image source={second_product} style={topProductImage}/>
                                    <Image source={sale_second} style={ratingStyle}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={topProductItem}>
                                <View>
                                    <Image source={third_product} style={topProductImage}/>
                                    <Image source={sale_third} style={ratingStyle}/>
                                </View>
                            </TouchableOpacity>

                        </View>
                        <View style={secondBaner}>
                            <Image source={second_baner} style={{width : 0.92 * width, height : 0.9* width * 54 /130}}/>
                        </View>
                    </View>

                    <View style={mainProduct}>
                        <View style={productNavigate} >
                            <TouchableOpacity>
                                <Text>Best sales</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>More >></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginTop : 10, width : width * 0.92}} >
                            <FlatList
                                data={productList}
                                horizontal={false}
                                numColumns = {3}
                                renderItem ={({item}) => {
                                    return (
                                        <View style={itemWraper}>
                                            <TouchableOpacity style={{alignItems : 'center'}}>
                                                <Image source={item.image} style={topProductImage}/>
                                                <Text style = {productNameStyle}>{item.name}</Text>
                                                <Text style={productPriceStyle}>{item.price} vnd</Text>
                                            </TouchableOpacity>
                                        </View>

                                    )
                                }}
                                keyExtractor={(item) =>"" + item.name}
                            >
                            </FlatList>
                        </View>

                    </View>


                </View>
                <View style={polixy}>
                    <TouchableOpacity>
                    <Text style={textPolixy}>{Def.PAY_POLIXY_LABEL}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>)
    }
}

const styles = StyleSheet.create({
    fringe : {
        position: 'absolute',
        bottom : 0
    },

    imageStyle : {
        height : imagetHeight,
        width: imageWidth,
        alignItems: 'center',
        justifyContent: 'center'
    },

    cateTitle: {
        fontSize: 18,
        color: '#9a9a9a',
        position: 'absolute',

        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    mainContent : {
      alignItems : 'center'
    },
    topSaleList : {
        flexDirection: 'row'
    },
    topSaleContainer : {
        width : 0.92* width,
        alignItems : 'center'
    },
    ratingStyle : {
        position: 'absolute',
        bottom: 10,
        right :10,
        width : 30,
        height: 20,
    },
    topProductItem : {
        borderWidth: 1,
        marginHorizontal: 2,
    },
    secondBaner : {
        marginTop: 5
    },
    topProductImage : {
        width : width * 0.3 -2,
        height :width * 0.3 -2,
    },
    mainProduct : {
        marginTop : 15,
        marginBottom : 10,
        width : 0.92* width,
        alignItems : 'center'
    },
    productNavigate : {
        flexDirection : 'row',
        width : 0.92* width,
        justifyContent : 'space-between'
    },
    itemWraper : {
        width : width * 0.3,
        justifyContent: 'center' ,
        margin:1,
        borderWidth: 1,
        borderColor : '#4d1c36'
    },
    productNameStyle : {
        marginTop : 5,
    },
    productPriceStyle : {
        marginTop : 3,
    },
    polixy :{
        alignItems : 'center',
        paddingVertical: 5,
        marginBottom: 10,
    },
    textPolixy : {
        fontSize: 16
    }
});