import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

export default function WhoMatchTab(props) {

  return(
    <View style={{ backgroundColor: "#1272db", flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
    <LinearGradient
      colors={['rgba(41, 171, 226, 0.90)', 'transparent']}
       style = {styles.gradientContainer}/>

       <Text style = {{fontFamily: "evolveBOLD", width: "100%", textAlign: "left",
       fontSize: 35, color: "white", marginBottom: "12%"}}>  Chi giocherà?</Text>

      <View style= {styles.coverWhite}>
        <View style = {{flexDirection: "row", alignItems: "center",
         borderBottomWidth: 1, padding: 5, borderColor: "rgba(52, 52, 52, 0.2)", justifyContent: "space-between"}}>
          <Text style = {{fontFamily: "evolveBOLD", fontSize: 25}}>Giocatori</Text>
            <View  style = {{flexDirection: "row", width: "40%", justifyContent: "space-around"}}>
              <TouchableOpacity><AntDesign name="minuscircleo" size={24} color="black" /></TouchableOpacity>
              <TouchableOpacity><Text style = {{fontFamily: "evolveBOLD", fontSize: 20}}>2</Text></TouchableOpacity>
              <TouchableOpacity><AntDesign name="pluscircleo" size={24} color="black" /></TouchableOpacity>
            </View>
          </View>

        <View style = {{marginTop: "10%", flexDirection: "row",
          justifyContent: "space-between", alignItems: "center"}}>
          <Text style = {{fontFamily: "evolveBOLD",fontSize: 18, color:  "rgba(52, 52, 52, 0.4)" }}>Giocatore 2</Text>
          <TouchableOpacity style = {{borderWidth: 1, paddingVertical: 5, paddingHorizontal: 10,
          alignItems: "center", borderRadius: 12}}>
            <Text  style = {{fontFamily: "evolveBOLD",fontSize: 15}}>Invita</Text>
          </TouchableOpacity>
        </View>


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

    coverWhite: {
      width: "100%",
        height: "60%",
      backgroundColor: "white",
      borderTopLeftRadius:25,
      borderTopRightRadius: 25 ,
      justifyContent: "flex-start",
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
