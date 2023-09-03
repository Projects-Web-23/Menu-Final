import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, Button , TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';

export default function Recipes({navigation,route})
{
 const recipe=route.params;
  return(
  <SafeAreaView style={styles.container}>

<Image
          style={{width: '100%', height: '50%'}}
         source={recipe.img}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>
          {recipe.dish_name}
        </Text>
        <Text style={styles.rate}>Rating : 
          {recipe.rating}
        </Text>
        <Text style={styles.price}>$
          {recipe.price}
        </Text>
        <Text style={styles.details}>
          {recipe.description}
        </Text>
        <View style={styles.buttons}>
        <TouchableOpacity style={styles.menuButton}onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText} >Go Back</Text>        
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Home')}>
       <Text style={styles.buttonText} >Go Home</Text>
        </TouchableOpacity>
        </View>
    
        
       
      </View>

  </SafeAreaView>
  )
}
const styles=StyleSheet.create(
    {
        container:
        {
            
            flex:1,
            width:'100%',
            height:'cover',
             // paddingBottom:50,
        },
        photo:
        {
          width: 500,
          height:'40%',
          flex:1

        },
        detailsContainer:
        {
            width:'100%',
            backgroundColor:'black',
            height:'50%'

        },
        title:
        {
          color:'white',
          padding:25,
          fontSize:30,

        },
        price:
        {
          color:'green',
          marginLeft:25,
          fontSize:25

        },
        rate:{
          color:'yellow',
          marginLeft:25,
          fontSize:25
        },
        details:
        {
          color:'white',
          margin:15,
          fontSize:17,
          
        },
        menuButton:
        {
          backgroundColor:'#FF5C00',
          color:'#FF5C00',
          width:200,
          alignContent:'center',
          alignSelf:'center',
          margin:10,
          borderRadius:20,
          height:30,
          textAlign:'center',          

        },
        buttons:
        {
          position:'absolute',
          bottom:12,
          margin:'auto',
          alignSelf:'center'
        },
        buttonText:
        {
          textAlign:'center',
          paddingTop:5,
          paddingBottom:5,
          fontSize:15,
          fontWeight:'bold'

        }

    }
);