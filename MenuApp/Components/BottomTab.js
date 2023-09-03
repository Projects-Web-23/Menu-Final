import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { StyleSheet } from 'react-native';
import React from 'react';
import About from './About';
import Menu from './Menu';
import Home from './Home';
const Tab=createBottomTabNavigator();
const BottomTab=()=>
{
    return (
    <Tab.Navigator screenOptions={screenStyle}>      
        
        <Tab.Screen name="Menu" component={Menu}  />
        <Tab.Screen name="Home" component={Home}/> 
    </Tab.Navigator>);
}  

const screenStyle =StyleSheet.create ({
    tabBarStyle:{
      height:80,
      borderTopWidth:0,
     backgroundColor:'rgb(20,20,20)'
     
    },
    tabBarItemStyle:{
      justifyContent:'center',
      borderWidth:0,
      backgroundColor:'transparent',
      height:80,
     
    },
    tabBarIconStyle:{
      display:"none",
    },
    tabBarActiveTintColor:'rgb(255,50,0)',
    headerShown: false,
});
export default BottomTab;
