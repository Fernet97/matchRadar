import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';


export default function BubbleChat(props) {

  return (
    <View style = {{margin: 20, alignItems: props.Iam ?"flex-end": "flex-start",
          }}>
        <View style = {{
          backgroundColor: "cyan",
          paddingVertical: 10,
          paddingHorizontal: 15,
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
        {!props.Iam? (
          <Text style = {{fontSize: 14, textAlign: "left", fontFamily: "evolveBOLD", paddingBottom: 5 }}>{props.author}</Text>):(null)}

          <Text style = {{
            fontSize: 16,
            fontFamily: "evolve",
          }}>
            {props.text}
          </Text>

          <Text style = {{fontSize: 12, textAlign: "right", fontFamily: "evolve", paddingTop: 5 }}>{props.hour}</Text>
      </View>

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
