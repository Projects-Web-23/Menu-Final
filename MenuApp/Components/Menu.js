import { StyleSheet, Text, View,SafeAreaView,ImageBackground,Image ,ScrollView,TouchableOpacity} from 'react-native';
import React ,{useState} from 'react';
//import SectionScroll from './sections';
import sections from '../Data/Sections'
import MenuList from './MenuList';
const Menu=({navigation})=>
{
   
   const [section,setSection]=useState(0);
  return (

  <SafeAreaView style={styles.container}>
   <ImageBackground source={require('../assets/menu.jpeg')} style={styles.img}>
   <View style={styles.TobSec}>     
      <Text style={styles.header} >Welcome</Text>
      <Image source={require('../assets/serving-dish.png')} style={styles.im}/>        
      </View>  
      <View style={styles.second}>
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
      </View>  
      <View style={styles.mm}>
         <MenuList num={section}/>
       </View>         
   </ImageBackground>    

   </SafeAreaView>
   )
}
const styles=StyleSheet.create
(
   {
      container:{
         flex:1,            
      },
      img:
      {
             flex:1,  
        resizeMode:"cover",
      },
      TobSec:
      {
         marginTop:50,
         flexDirection:'row',
         gap:90
      }
      ,header:
      {
         color:`#faebd7`,
         fontSize:40,
         marginLeft:12,
         fontFamily:''
      },
      im:
      {
         height:60,
         width:60,
         borderRadius:30,
         
      },
      mm:
      {
         marginBottom:250
      },
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
export default Menu;
