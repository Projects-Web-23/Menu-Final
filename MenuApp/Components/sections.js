import React,{useState} from 'react'
import {View,Text,ScrollView, TouchableOpacity,StyleSheet,Image}from 'react-native'
import sections from '../Data/Sections'
const SectionScroll = ()=>
{
    const [section,setSection]=useState(0);
    return (
        <ScrollView horizontal contentContainerStyle={styles.contain} >
            {
                sections.map((el,index)=>(
                    <TouchableOpacity key={index} activeOpacity={0.7} onPress={()=>setSection(index)}>
                        <View style={{...styles.in,backgroundColor:section==index?`#ff8c00`:`#fff8dc`}}>                           
                        <View style={styles.ineerImage}>
                            <Image source={el.img} style={styles.photo}/>
                        </View>
                        <Text style={{...styles.titlename,color:section==index?`#fff8dc`:`#ff8c00`}}>{el.title}</Text>
                        </View>
                    </TouchableOpacity>
                ))
            }

        </ScrollView>

    )
    
}

const styles=StyleSheet.create
(
    {
        contain:
        {
            alignItems:"center",
            paddingVertical:20,
            paddingHorizontal:20,
            justifyContent:"space-between"
        },
        in:
        {
            flexDirection:"row",
            alignItems:"center",
           // backgroundColor:`#ff8c00`,
            width:150,
            height:45,
            marginRight:20,
            borderRadius:30,    
            gap:10,        
        },
        ineerImage:
        {
            height:30,
            width:30,
            borderRadius:15,
            justifyContent:"center",
            alignContent:"center",
            backgroundColor:`#fff8dc`,
            marginLeft:10
         },
        photo:
        {
            height:30,
            width:30,
            borderRadius:15,
            resizeMode:"cover"
        }
    }
)
export default SectionScroll;