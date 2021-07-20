import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, TextInput, FlatList  } from 'react-native';
import BubbleChat from '../Components/BubbleChat';
import { Ionicons } from '@expo/vector-icons';




export default function commentiTab(props) {
	return (
		<View style={{flex: 1,backgroundColor: "white", justifyContent: 'center' }}>

		<View style = {{flex: 8, marginTop: "20%", alignItems: "flex-start", }}>
		  <FlatList
				data={[
					{key: "1", msg: 'Uagliu ma simm sicuri che c so le docce? io m romp r torna a casa tutt zuzzus', me: true, hour: "12:11", writer: "Piero"},
					{key: "2", msg:  'Sine ja, muovt , non fa muttette', me: false, hour: "12:15", writer: "Piero"},
					{key: "3", msg: 'babbu 👍', me: true, hour: "12:22", writer: "Giacomo"},
					{key: "4", msg: 'Oi io sono qua', me: true, hour: "13:06", writer: "Piero"},
					{key: "5", msg: 'o mi vedi?', me: false, hour: "13:11", writer: "Giacomo"},
				]}
				renderItem={({item}) => <BubbleChat  Iam= {item.me} text= {item.msg} hour = {item.hour} author= {item.writer}/>}
				/>
		</View>

      <View style = {{ flex: 3, Direction: "row", flexDirection: "row",
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
