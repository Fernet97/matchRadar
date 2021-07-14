import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, FlatList } from 'react-native';
import fieldImage from '../assets/field.png';

function ItemField(props) {
  console.log(props.item)
  return (
    <TouchableOpacity styles style={styles.item}>
    <Image source={fieldImage} style={{height: 60, width: 60}} />
      <Text style = {{fontFamily: "evolve", fontSize: 20}}> {props.item.key}</Text>
    </TouchableOpacity>
  )
}

export default function FieldTab(props) {

	return (
    <View style={styles.container}>
    <FlatList
      data={[
        {key: 'Campo rosso'},
        {key: 'Zi pepp'},
        {key: 'Futura'},
        {key: 'MMh Arena'},
        {key: 'La papuia è fiuta alleba'},
        {key: 'San Paolo'},
        {key: 'campo r i sciemi'},
        {key: 'campo wow'},
        {key: 'Stadio Frenesia'},
        {key: 'Campo blu'},
        {key: 'Campo grigio'},

      ]}
      renderItem={({item}) => <ItemField item = {item} />}
      contentContainerStyle={{ paddingBottom: "25%"}}
    />
     </View>
	);
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: "white",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: "3%",
  },
});
