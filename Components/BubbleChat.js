import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';


export default function BubbleChat(props) {

  return (
    <View style = {{margin: 20, alignItems: props.Iam ?"flex-end": "flex-start"}}>
        <Text style = {{
          fontSize: 18,
          fontFamily: "evolve",
          backgroundColor: "cyan",
          padding: 15,
          borderBottomLeftRadius: props.Iam ? 15 : 0,
          borderBottomRightRadius: props.Iam ? 0 : 15,
          backgroundColor: props.Iam ? "#29abe2" : "white",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          shadowColor: "#000",
          shadowOffset: {
          	width: 0,
          	height: 6,
          },
          shadowOpacity: 0.39,
          shadowRadius: 8.30,

          elevation: 13,
        }}>
          {props.text}
        </Text>
    </View>
  )

}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "yellow",
    },


});
