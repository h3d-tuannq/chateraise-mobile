import React, {Component} from 'react'
import  {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import {createStackNavigator , createAppContainer } from 'react-navigation'
import ProductList from "./ProductListScreen";
import ProductDetail from "./ProductDetailScreen";

const ProductStack = createStackNavigator({
    ProductList : ProductList,
    ProductDetail : ProductDetail,
}, {
    initialRouteName: 'ProductList',
    headerMode : 'none',
    navigationOptions : {
        headerMode : 'none',
    }
});

const ProductConainer = createAppContainer(ProductStack);


export default class ProductScreen extends Component {
    render () {
        return (
            <ProductConainer/>
        )
    }
}

