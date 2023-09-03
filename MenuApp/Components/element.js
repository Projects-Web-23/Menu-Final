import React from 'react'
import {Dimensions, TouchableOpacity,Text,View,StyleSheet,Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';


const {width} = Dimensions.get("screen")
const card=width/2-40
const Item2=({details})=>
{
    const navigation=useNavigation();

    return(
        <View style={styles.over}>
            <Image style={styles.image} source={details.img}/>
            <Text style={styles.name}>{details.dish_name}</Text>
            <View style={styles.bottom}>
                <View style={styles.price}>
                    <Image source={require("../assets/coin.png")} style={styles.money}/>
                    <Text style={styles.num}>{details.price}</Text>
                    <TouchableOpacity style={styles.goto} onPress={()=>navigation.navigate('Recipes',details)} >
                    <Image source={require('../assets/arrow.png') }style={styles.go}/>
                </TouchableOpacity>
                </View>
                
            </View>
        </View>

    );
};
const styles=StyleSheet.create(
    {
          over:
          {
            marginHorizontal:20,
            height:220,
            marginVertical:20,
            borderRadius:50,
            shadowColor:`#fff8dc`,
            backgroundColor:'rgba(0,0,0,0.3)',
            marginBottom:30,
            justifyContent:"center",
            width:card

          },
          image:
          {
            height:110,
            borderTopRightRadius:50,
            borderTopLeftRadius:50,            
            resizeMode:"cover",
            width:"cover",
            marginBottom:7
          },
          name:
          {
            alignItems:"center",
            fontSize:15,
            color:`#fff8dc`,
            marginBottom:6,
            marginLeft:4,
           
            color:'white',
            
            height:40
          },
          price:
          {
            height:50,
            flexDirection:"row",
            gap:15
          },
          money:
          {
            height:30,
            width:30,
            marginHorizontal:5
          },
          num:
          {
            color:"white"
          }
          ,goto:
          {
            height:30,
            width:30,
            marginHorizontal:5,
            borderRadius:15,
            backgroundColor:`#fff8dc`,
            justifyContent:"center",
            alignItems:"center"
          },
          go:
          {
            height:15,
            width:15,
          }

          

    }
)
export default Item2;