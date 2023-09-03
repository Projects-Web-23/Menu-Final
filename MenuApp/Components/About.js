import React from 'react';
import {ScrollView, ImageBackground, StyleSheet, Text, View } from 'react-native';

const About=()=>
{
    return(
    <ScrollView style={AboutStyle.container}>
        <ImageBackground source={require('../assets/About.jpg')} style={AboutStyle.BackgroundImage}>
        <Text style={AboutStyle.sectionTitle}>
                    About
        </Text>
        <Text style={AboutStyle.sectionTitle2}>
                    Gusteau
        </Text>

        <View style={AboutStyle.TextContainer}>
            <Text style={AboutStyle.sectionBody}>
                    Introducing the Menu App, a revolutionary digital solution designed to streamline
                    the ordering process for restaurants and their customers. This innovative app
                    offers a user-friendly interface that allows customers to easily browse through
                    the restaurant's menu, place orders, and make payments all from the comfort of
                    their mobile devices. With the Menu App, restaurants can efficiently manage their
                    orders, track inventory, and monitor sales in real-time. 
                    {"\n"}{"\n"}{"\n"}The app also provides valuable
                    insights into customer behavior and preferences, enabling restaurants to tailor their
                    offerings to meet the needs of their clientele. The Menu App is a must-have tool for any
                    restaurant looking to enhance their customer experience and increase their operational efficiency. 
                    Experience the future of restaurant ordering with the Menu App.
            </Text>
        </View>
        </ImageBackground>
    </ScrollView>
    );
}

export default About;

const AboutStyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000000'
    },
    BackgroundImage: {
        flex: 1,
        justifyContent: 'center',
        resizeMode:"cover",

    },
    sectionTitle: {
        margin: 20,
        letterSpacing:-0.4,
        lineHeight:50,
        paddingTop:40,
        marginTop:60,
        fontSize: 60,
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: {width: 2, height: 3},
        textShadowRadius: 7,
        color:'white',

    },
    sectionTitle2: {
        margin: 20,
        letterSpacing:-0.4,
        lineHeight:50,
        paddingTop:25,
        marginTop:-40,
        fontSize: 60,
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: {width: 2, height: 3},
        textShadowRadius: 7,
        color:'rgb(255,50,0)',

    },
    sectionBody: {
        margin: 20,
        padding: 3,
        fontSize: 12,
        fontWeight: '100',
        letterSpacing:-0.4,
        lineHeight:18,
        color:'white',
        textAlign: 'left',

        },

    TextContainer:{
        margin: 20,
        marginTop:5,
        backgroundColor:'rgba(0,0,0,0.5)',
        borderRadius: 10,
        borderWidth: 0,
    },

});
