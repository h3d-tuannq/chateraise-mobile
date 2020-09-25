import React from 'react';
import { StyleSheet, Text, View , ScrollView, Button, TouchableHighlight } from 'react-native';
import {createStackNavigator , createAppContainer } from 'react-navigation'

// import screen
import WelcomeScreen from './views/welcome/WelcomeScreen'
import PaymentPolicyScreen from './views/payment/PaymentPolicyScreen'
import ContactScreen from './views/contact/ContactScreen'
import MainScreen from './views/main/MainScreen'
import HomeScreen from  './views/home/HomeScreen'

import ProductListScreen from  './views/product/ProductListScreen'
import ProductDetailScreen from  './views/product/ProductDetailScreen'
import ProductScreen from  './views/product/ProductScreen'


class TestGUI extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Button title="Go to WelcomeScreen" onPress={() => this.props.navigation.navigate('Welcome')}/>
            <Text></Text>
            <Button title="Go to PaymentPolicyScreen" onPress={() => this.props.navigation.navigate('PaymentPolicyScreen')}/>
            <Text></Text>
            <Button title="Go to ContactScreen" onPress={() => this.props.navigation.navigate('ContactScreen')}/>
            <Text></Text>
            <Button title="Go to MainScreen" onPress={() => this.props.navigation.navigate('MainScreen')}/>
            <Text></Text>
            <Button title="Go to ProductListScreen" onPress={() => this.props.navigation.navigate('ProductListScreen')}/>
            <Text></Text>
            <Button title="Go to ProductDetailScreen" onPress={() => this.props.navigation.navigate('ProductDetailScreen')}/>
            <Text></Text>


        </ScrollView>
    );
  }
}


const RootStack = createStackNavigator({
    Welcome : WelcomeScreen,
    PaymentPolicyScreen : PaymentPolicyScreen,
    ContactScreen : ContactScreen,
    MainScreen : MainScreen,
    ProductListScreen : ProductListScreen,
    ProductDetailScreen : ProductDetailScreen,
    ProductScreen : ProductScreen,
    TestGUI : TestGUI,
}, {
    initialRouteName: 'TestGUI',
    headerMode : 'none',
    navigationOptions : {
        headerMode : 'none',
    }
});

const RootConainer = createAppContainer(RootStack);


export default class App extends React.Component {
  render() {
    return (
     <RootConainer/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer : {
      paddingVertical: 20
  }

});
