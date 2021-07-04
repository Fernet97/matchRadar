import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SelectSportTab(props) {

  return(
    <View style={{ backgroundColor: "#1272db", flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
    <LinearGradient
      colors={['rgba(41, 171, 226, 0.90)', 'transparent']}
       style = {styles.gradientContainer}/>

       <Text style = {{fontFamily: "evolveBOLD", width: "100%", textAlign: "left",
       fontSize: 35, color: "white", marginBottom: "12%"}}>  Seleziona lo sport</Text>

      <View style= {styles.coverWhite}>
        <TouchableOpacity style = {styles.buttonSport}>
          <Text style = {{fontFamily: "evolve", fontSize: 35 }}>Calcio</Text>
          <MaterialCommunityIcons name="soccer" size={70} color="#29abe2" />
        </TouchableOpacity >
        <TouchableOpacity style = {styles.buttonSport}>
          <Text style = {{fontFamily: "evolve", fontSize: 35 }}>Basket</Text>
            <MaterialCommunityIcons name="basketball" size={70} color="#29abe2" />
        </TouchableOpacity>
        <TouchableOpacity style = {styles.buttonSport}>
          <Text style = {{fontFamily: "evolve", fontSize: 35 }}>Tennis</Text>
          <MaterialCommunityIcons name="tennis-ball" size={70} color="#29abe2" />
        </TouchableOpacity>
      </View>
    </View>
  );

}


const styles = StyleSheet.create({

  gradientContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 800,
    },

buttonSport : {
  backgroundColor: "white",
  paddingVertical: 10,
  paddingHorizontal: 30,
  borderRadius: 20,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginVertical: 15,
  shadowOffset: {
  	width: 0,
  	height: 7,
  },
  shadowOpacity: 0.41,
  shadowRadius: 9.11,

  elevation: 14,
},

coverWhite: {
  width: "100%",
  backgroundColor: "white",
  borderTopLeftRadius:25,
  borderTopRightRadius: 25 ,
  justifyContent: "center",
  alignItems:"stretch",
  padding: "10%",
  paddingBottom: "50%",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity: 0.41,
  shadowRadius: 9.11,

  elevation: 14,

}

});
