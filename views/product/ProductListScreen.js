import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, FlatList, Image, ScrollView} from 'react-native'
import {createStackNavigator , createAppContainer } from 'react-navigation'

const {width, height} = Dimensions.get('window')

import add_cart_small from '../../assets/add_cart_small.png'
import best_seller_icon from '../../assets/best_saller_small_icon.png'

import Header from "../com/Header";
import sp1 from "../../assets/demo/sp1.jpg";
import sp2 from "../../assets/demo/sp2.jpg";
import sp3 from "../../assets/demo/sp3.jpg";
import Def from "../../val/Def";


const productCategory = [
    {
        categoryName: 'All',
        categoryCode : 'all',
        categoryId : '1'
    }
    ,
    {
        categoryName: 'Cake',
        categoryCode : 'cake',
        categoryId : '2'
    }
    ,
    {
        categoryName: 'Ice-cream',
        categoryCode : 'ice-cream',
        categoryId : '3'
    }
    ,
    {
        categoryName: 'Drink',
        categoryCode : 'drink',
        categoryId : '4'
    }
    ,
];




const productList  = [
    {
        image : sp1,
        name : 'image1',
        price : 1000,
        best_sale : true,
    },
    {
        image : sp2,
        name : 'image2',
        price : 1000,
        best_sale : false,
    },
    {
        image : sp3,
        name : 'image3',
        price : 1000,
        best_sale : false,
    },
    {
        image : sp1,
        name : 'image4',
        price : 1000,
        best_sale : true,
    },
    {
        image : sp2,
        name : 'image5',
        price : 1000,
        best_sale : false,
    },
    {
        image : sp3,
        name : 'image6',
        price : 1000,
        best_sale : true,
    }
];


export default class ProductListScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedCategory : 'All'
        }
    }

    gotoDetail(){
        this.props.navigation.navigate('ProductDetail');
    }

    render () {
        const {container,itemWraper,stateItemStyleSelected,stateItemStyleNomal , navigateProduct, itemWraperCategory ,
            productImage, productNameStyle, productPriceStyle , productListStyle, add_cart_style , add_cart_style_container,
            best_seller_style} = styles;

        return (
        <View style={{flex: 1}}>
            <Header style={{height : 0.1 * height}} displaySearch={true} title={Def.APP_NAME}/>
            <View style={navigateProduct}>
                <FlatList
                    data={productCategory}
                    horizontal={true}
                    extraData={this.state.selectedCategory}
                    renderItem ={({item}) => {

                        return (

                            <View style={itemWraperCategory}>
                                <TouchableOpacity onPress={() => this.setState( {selectedCategory : item.categoryName})}>
                                    <Text style={this.state.selectedCategory == item.categoryName ? stateItemStyleSelected : stateItemStyleNomal}>{item.categoryName} </Text>
                                </TouchableOpacity>
                            </View>

                        )
                    }}
                    keyExtractor={(item) =>"" + item.categoryCode}
                >

                </FlatList>
            </View>
            <ScrollView >
                <View style={container} >

                    <View style={productListStyle} >
                        <FlatList
                            data={productList}
                            horizontal={false}
                            numColumns = {2}
                            renderItem ={({item}) => {
                                return (
                                    <View style={itemWraper}>
                                        <TouchableOpacity style={{alignItems : 'center'}} onPress={this.gotoDetail.bind(this)}>
                                            <Image source={item.image} style={productImage}/>
                                            {
                                                item.best_sale
                                                    ? <Image source={best_seller_icon} style={best_seller_style} /> : <View/>

                                            }
                                            <Text style = {productNameStyle}>{item.name}</Text>
                                            <Text style={productPriceStyle}>{item.price} vnd</Text>
                                            <TouchableOpacity style={add_cart_style_container}>
                                                <Image source={add_cart_small} style={add_cart_style} />
                                            </TouchableOpacity>

                                        </TouchableOpacity>
                                    </View>

                                )
                            }}
                            keyExtractor={(item) =>"" + item.name}
                        >
                        </FlatList>
                    </View>

                </View>
            </ScrollView>
        </View>

        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems: 'center',
    },
    navigateProduct : {
        alignItems: 'center',
        height : height * 0.04,
    },
    productListStyle : {
        marginTop : 15,
        width : width * 0.95,
        alignItems : 'center'
    }
    ,
    itemWraperCategory : { height : 30, minWidth: 70,  justifyContent: 'center' , padding : 2},
    stateItemStyleSelected: {color:'#fff', height : 25 ,  backgroundColor : '#4d1c36', textAlign: 'center', paddingTop : 1 ,borderRadius:4, justifyContent:'center'},
    stateItemStyleNomal: {color:'#fff' , height : 25, backgroundColor : '#9b999a', textAlign: 'center', paddingTop : 1 , borderRadius:4, justifyContent:'center'},
    itemWraper : {
        width : width * 0.45,
        justifyContent: 'center' ,
        margin:1,
        borderWidth: 1,
        borderColor : '#4d1c36',
        paddingVertical: 8,
    },
    productNameStyle : {
        marginTop : 5,
    },
    productPriceStyle : {
        marginTop : 3,
    },

    productImage : {
        width : width * 0.35,
        height :width * 0.35,
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
        top : 8,
        left : 8,
        width : 30,
        height : 30,
    }

});