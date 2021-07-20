import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, TextInput, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';





function CommentoItem(props){
  return (
    <View style = {{  marginVertical: "2%", borderRadius: 12, padding: 10, paddingBottom: 2, paddingHorizontal: 20}}>
        <Text style = {{color: "black", fontFamily: "evolve", fontSize: 18, }}>
          {props.msg}
        </Text>
        <View style = {{alignItems: "flex-end", }}>
          <Text style = {{fontFamily: "evolve", fontSize: 14}}>{props.hour}</Text>
        </View>
    </View>

  );
}





export default function noteTab(props) {
  console.log("ciaociao");

	return (
		<View style={{flex: 1, backgroundColor: "white", justifyContent: "flex-start", alignItems: 'stretch' }}>
       <View style = {{flex: 8, marginTop: "20%", alignItems: "flex-start", }}>

       <FlatList
         data={[
           {key: "1", msg: 'Raga paga tutto Peppe, la prima partita è gratis. Raga mi raccomando, maglie gialle e nere. Se facciamo i bravi magari anche la prossima è a costo 0.', hour: "12:11"},
           {key: "2", msg: 'Ah vabbe ja le porta Maurizio le magliette', hour: "12:40"},
           {key: "3", msg: 'Maaaa io sono al campetto, voi dove minch*a siete????? Dai vi sto aspettando', hour: "13:01"},
           {key: "4", msg: 'oooooo siete di un ritardo imbarazzante.', hour: "13:51"},
         ]}
         renderItem={({item}) => <CommentoItem msg = {item.msg} hour = {item.hour} />}
       />


       </View>
       <View style = {{ flex: 3, flexDirection: "row",
        justifyContent: "center", alignItems: "center"}}>
         <TextInput
           style={styles.TextInput}
           // onChangeText={onChangeNumber}
           // value={number}
           placeholder="Scrivi una nota ..."
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

    button: {
        backgroundColor: "#1272db",
        width: "30%",
        alignItems: "center",
        borderRadius: 20,
        paddingVertical: "2%",
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
      },

      textButton: {
          width: "30%",
          alignItems: "center",
          paddingVertical: "2%",
          fontFamily: "evolve",
          fontSize: 20,
          color: "black",
          textAlign: "center",
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
