import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, TextInput, SafeAreaView, ScrollView,  } from 'react-native';
import BubbleChat from '../Components/BubbleChat';
import { Ionicons } from '@expo/vector-icons';


export default function commentiTab(props) {
	return (
		<View style={{flex: 1,backgroundColor: "white", justifyContent: 'center' }}>
      <View style = {{ flex: 7,  marginVertical: "20%",}}>
        <BubbleChat Iam= {true}  text= "Uagliu ma simm sicuri che c so le docce? io m romp r torna a casa tutt zuzzus"/>
        <BubbleChat  Iam= {false} text= "Sine ja, muovt , non fa muttette"/>
        <BubbleChat  Iam= {true} text= "babbu 👍"/>
      </View>
      <View style = {{ flex: 3, flexDirection: "row",
       justifyContent: "center", alignItems: "center"}}>
        <TextInput
          style={styles.TextInput}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Scrivi un commento ..."
          />
          <TouchableOpacity>
            <Ionicons name="arrow-redo-circle" size={44} color="#1272db" />
          </TouchableOpacity>
      </View>
    </View>
	);
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "stretch",
      justifyContent: "center",
      backgroundColor: "white",
    },


  gradientContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    borderRadius: 20,
    paddingVertical: "2%",
  },


  UserItem: {
    fontFamily: "evolve",
    fontSize: 18,
    color: "black",
  },

  TextInput: {
    height: 40,
    margin: 12,
    width: "70%",
    paddingHorizontal: 15,
    fontFamily: "evolveBOLD",
    borderRadius: 20,
    backgroundColor: 'rgba(52, 52, 52, 0.2)'
  },

});
