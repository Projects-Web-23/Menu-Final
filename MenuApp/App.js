import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import About from './Components/About';
import Menu from './Components/Menu';
import Home from './Components/Home';
import {createStackNavigator} from '@react-navigation/stack';

import Recipes from './Components/RecipeDetails';

const Stack = createStackNavigator();



export default function App()
{
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenStyle}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
       <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Recipes" component={Recipes}/>        
      </Stack.Navigator>
    </NavigationContainer>
    );
};

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


