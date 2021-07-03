import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function WhoMatchTab(props) {

  return(
    <View style={{ backgroundColor: "#1272db", flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <LinearGradient
      colors={['rgba(41, 171, 226, 0.90)', 'transparent']}
       style = {styles.gradientContainer}/>
      <View style= {{flex: 1, padding: "8%", justifyContent: "center", alignItems:"center"}}>
        <Text style = {{fontFamily: "evolveBOLD",
        fontSize: 32, color: "white", marginBottom: "12%"}}>Hai già prenotato in struttura?</Text>
        <Text style = {{fontFamily: "evolve",
        fontSize: 18, color: "white"  }}>
          TI ricordiamo che Match Radar non si occupa della prenotazione in struttura.
          Assicurati di aver prenotato prima di continuare la creazione del Match.
        </Text>

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
});
