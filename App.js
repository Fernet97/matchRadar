import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { Ionicons, FontAwesome, FontAwesome5 , EvilIcons, Entypo, MaterialIcons    } from '@expo/vector-icons';
import FilterMyMatch from './Components/FilterMyMatch';
import ListOtherMatch from './Components/ListOtherMatch';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Logo from './assets/icon.png';
// TouchableOpacity.defaultProps = { activeOpacity: 0.70}

export default function App(props) {

  let [fontsLoaded] = useFonts({
    'evolveBOLD': require('./assets/fonts/evolveBold.otf'),
    'evolve': require('./assets/fonts/evolveLight.otf'),
  });


  if (!fontsLoaded) {
    console.log("font non ancora caricato...");
    return <AppLoading />;
    }
    else {
      console.log("font caricato!");
      return (
        <View style={styles.container}>

          {/*Barra in alto*/}
          <View  style={styles.TopContainer}>
           <Image source={Logo} style={{width: "15%", aspectRatio: 1}} />
            <View style={{ flexDirection: 'row', alignItems: "center",
                          justifyContent: "space-between", width: "20%"}}>
              <TouchableOpacity><EvilIcons name="user" size={35} color="black" /></TouchableOpacity>
              <TouchableOpacity><Ionicons name="ios-settings-outline" size={28} color="black" /></TouchableOpacity>
            </View>
          </View>

          {/* I tuoi Match */}
          <FilterMyMatch/>


         {/* Altri match */}
         <View  style={{flex: 3, width: '100%', alignItems: 'center'}}>
           <Text style={{fontSize: 25,  fontFamily: 'evolveBOLD'}}>Altri Match</Text>
              <ListOtherMatch/>
         </View>


         {/*Barra Menu */}
         <View  style={{flex: 1, width: "100%", alignItems: "center"}}>
            <View  style={{ width: "65%", padding: "3%", flexDirection: "row", backgroundColor: "white",
                    height: "65%", borderRadius: 30, alignItems: "center", justifyContent: "space-around",
                    borderWidth: 0.02,
                    shadowColor: "#000",
                    shadowOffset: {
                    	width: 0,
                    	height: 12,
                    },
                    shadowColor: "#000",
                    shadowOffset: {
                    	width: 0,
                    	height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    elevation: 3,
                  }}>
              <TouchableOpacity><Entypo name="home" size={28} color="#1272db" /></TouchableOpacity>
              <TouchableOpacity><Entypo name="plus" size={33} color="black" /></TouchableOpacity>
              <TouchableOpacity><MaterialIcons name="search" size={30} color="black" /></TouchableOpacity>
              <TouchableOpacity><Ionicons name="md-notifications-outline" size={27} color="black" /></TouchableOpacity>
            </View>
         </View>


        </View>
	  );
  }

}





const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '5%',
      justifyContent: 'space-between',
    },

    TopContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: '3%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
      },


});