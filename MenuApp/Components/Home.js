import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';

function Home({ navigation }) {
   return (
      <SafeAreaView style={Style.Container}>
         <ImageBackground source={require("../assets/home2.jpg")} style={Style.img}>
            <View style={Style.maincon}>
               <Text style={Style.welcome}>Welcome</Text>
               <Text style={Style.Name}>GUSTEAU’S</Text>
               <TouchableOpacity style={Style.Buttons} onPress={() => navigation.navigate('Menu')}>
                  <Text style={Style.TextButtons}>MENU</Text>
               </TouchableOpacity>
               <TouchableOpacity style={Style.Buttons} onPress={() => navigation.navigate('About')}>
                  <Text style={Style.TextButtons}>ABOUT</Text>
               </TouchableOpacity>
            </View>
         </ImageBackground>
      </SafeAreaView>
   );

}



const Style = StyleSheet.create({
   welcome: {
      color: "rgb(255, 255, 255);",
      fontSize: 38,
      paddingTop: 20,
      //fontFamily: "Kaushan Script",
      // paddingBottom: 30,
      textAlign: "center",
      fontWeight: "bold",
   },
   maincon:
   {
      width: "80 %",
      height: "50 %",
      backgroundColor: "rgba(0, 0, 0, 0.447)",
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center'

   },
   img:
   {
      // opacity:0.5,
      width: "100 %",
      height: "100 %",
      justifyContent: 'center',
      alignItems: 'center'
      //        flex:1,
      //   resizeMode:"cover",
   },
   Container: {
      justifyContent: 'center',
      alignItems: 'center'

   },
   Name:
   {
      color: "#FF5C00",
      fontSize: 25,
      paddingTop: 30,
      fontFamily: "Kaushan Script",
      fontStyle:'italic',
      // paddingBottom: 30,
      textAlign: "center",
      fontWeight: "bold",

   },
   Buttons: {
      width: "70%",
      backgroundColor: '#FF5C00',
      // paddingBottom: 20,
      marginBottom: 20,
      borderRadius: 20,
      // height: 60,
      display: 'block',
      textAlign: "center",
      marginTop: 40,
      alignItems: 'center',

   },
   TextButtons: {
      textAlign: "center",
      color: "#ffffff",
      fontSize: 20,
      fontWeight:'bold',
      padding: 15,

      alignItems: 'center',
      /* The line `// margin: 'auto',` is a comment in JavaScript. It is not doing anything in the code.
      It is simply a comment that is ignored by the JavaScript interpreter. */
      margin: 'auto',
      // fontWeight:'bold',
   }
});
export default Home;
