import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function MatchItem(props) {

  return(
    <TouchableOpacity style={styles.itemMatch} onPress={props.callbackForOpenMatch}>
         <View style = {{alignItems: "center", justifyContent: "center", flexDirection: "row"}}>
           <View style = {{alignItems: "center", justifyContent: "center", paddingHorizontal:"1%" }}>
             <Ionicons name="ios-basketball-outline" size={24} color="#29abe2" />
           </View>
           <View>
               <Text style = {{fontSize: 16, fontFamily: "evolveBOLD"}}>Palazzetto</Text>
               <Text style = {{fontSize: 14, fontFamily: "evolve"}}>Sala Consilina</Text>
               <Text style = {{fontSize: 14, fontFamily: "evolve"}}>16:00 - 17:00</Text>
           </View>
         </View>
         <Text style = {{fontSize: 17, fontFamily: "evolveBOLD", paddingHorizontal: "2%"}}>6/10</Text>
       </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemMatch : {
    padding: "3%",
    margin: "2%",
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent:  "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
      borderWidth: 0.01,
    elevation: 4,
  },

});
