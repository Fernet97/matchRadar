import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { Ionicons, EvilIcons, Entypo, MaterialIcons    } from '@expo/vector-icons';
import Logo from '../assets/icon.png';
import FilterMyMatch from '../Components/FilterMyMatch';
import ListOtherMatch from '../Components/ListOtherMatch';


export default  function HomeScreen(props) {
	const gotoSearchScreen = () => {
		props.navigation.navigate('Search');
	};
	const gotoOpenMatchScreen = () => {
		props.navigation.navigate('OpenMatch');
	};

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
     <FilterMyMatch callbackForOpenMatch = {gotoOpenMatchScreen}/>

     {/* Altri match */}
     <View  style={{flex: 3, width: '100%', alignItems: 'center'}}>
       <Text style={{fontSize: 25,  fontFamily: 'evolveBOLD'}}>Altri Match</Text>
          <ListOtherMatch callbackForSearch = {gotoSearchScreen}  callbackForOpenMatch = {gotoOpenMatchScreen} />
     </View>


		 {/* Per fare un po' di margine per la barra di navigazione */}
		 <View  style={{flex: 1}}>

		 </View>
    </View>
	);
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '5%',
      justifyContent: 'space-between',
      backgroundColor: "white",
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
