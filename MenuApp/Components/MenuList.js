import React,{useState} from 'react'
import {View,Text,ScrollView, TouchableOpacity,StyleSheet,Image, FlatList}from 'react-native'
import Item2 from './element';
import food from '../Data/Food'



const MenuList=({num})=>
{
   let arr=food.filter((el)=>el.c==num)
    return (

        <FlatList   data={arr} numColumns={2} renderItem={({item}) => <Item2 details={item}  />}/>

        
    )
}
const styles=StyleSheet.create(
    {
        mall:
        {
            gap:30,
           marginBottom:500
        }
    }
)
export default MenuList;