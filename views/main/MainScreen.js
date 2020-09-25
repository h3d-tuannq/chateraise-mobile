import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity, Dimensions, StyleSheet} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'

import home_normal from '../../assets/tab-navigator/home_normal.png'
import home_selected from '../../assets/tab-navigator/home_selected.png'
import product_normal from '../../assets/tab-navigator/product_normal.png'
import product_selected from '../../assets/tab-navigator/product_selected.png'
import favorite_normal from '../../assets/tab-navigator/favorite_normal.png'
import cupon_nomal from '../../assets/tab-navigator/cupon_nomal.png'
import top_sale_normal from '../../assets/tab-navigator/top_sale_normal.png'


const {width, height} = Dimensions.get('window');

import HomeScreen from '../home/HomeScreen'
import ProductScreen from '../product/ProductScreen'
import FavoriteScreen from '../favorite/FavoriteScreen'
import CuponScreen from '../cupon/CuponScreen'
import TopSaleScreen from '../topsale/TopSaleScreen'


import GlobalNavigate from '../../global-navigate/GlobalNavigate'

export default class MainScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedTab : 'product'
        }
    }

    render(){
        GlobalNavigate.globalNavigate = this.props.navigation.navigate;
        const {selectedTab} = this.state;
        const {tabIconStyle} = styles;
        return (
            <View style={{flex : 1, backgroundColor : '#ffffff'}}>
                <TabNavigator tabBarStyle={{backgroundColor: '#ffffff', height : 60, borderTopWidth: 1 , borderColor : '#c8c8c8'}}>
                    <TabNavigator.Item
                        selected={selectedTab === 'home'}
                        renderIcon={() => <Image source={home_normal} style={{width : 31, height :26}}/>}
                        renderSelectedIcon={() => <Image source={home_selected} style={{width : 31, height :26}}/>}
                        onPress = {()=> this.setState({selectedTab : 'home'})}
                    >
                       <HomeScreen/>
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={selectedTab === 'product'}
                        renderIcon={() => <Image source={product_normal} style={{width : 32, height :26}}/>}
                        renderSelectedIcon={() => <Image source={product_selected} style={{width : 32, height :26}}/>}
                        onPress = {()=> this.setState({selectedTab : 'product'})}
                    >
                        <ProductScreen/>
                    </TabNavigator.Item>

                   <TabNavigator.Item
                        selected={selectedTab === 'favorite'}
                        renderIcon={() => <Image source={favorite_normal} style={{width : 27, height :27}}/>}
                        renderSelectedIcon={() => <Image source={favorite_normal} style={{width : 27, height :27}}/>}
                        onPress = {()=> this.setState({selectedTab : 'favorite'})}
                    >
                       <FavoriteScreen/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'cupon'}
                        renderIcon={() => <Image source={cupon_nomal} style={{width : 40, height :25}}/>}
                        renderSelectedIcon={() => <Image source={cupon_nomal} style={{width : 40, height :25}}/>}
                        onPress = {()=> this.setState({selectedTab : 'cupon'})}
                    >
                        <CuponScreen/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'topsale'}
                        renderIcon={() => <Image source={top_sale_normal} style={{width : 36, height :25}}/>}
                        renderSelectedIcon={() => <Image source={top_sale_normal} style={{width : 36, height :25}}/>}
                        onPress = {()=> this.setState({selectedTab : 'topsale'})}
                    >
                        <TopSaleScreen/>
                    </TabNavigator.Item>
                </TabNavigator>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabIconStyle : {
        width : 30,height : 30
    }
});