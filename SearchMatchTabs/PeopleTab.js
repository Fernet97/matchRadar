import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, FlatList } from 'react-native';
import { EvilIcons  } from '@expo/vector-icons';




function ItemPeople(props) {
  console.log(props.item)
  return (
    <TouchableOpacity styles style={styles.item}>
      <EvilIcons name="user" size={60} color="black" />
      <Text style = {{fontFamily: "evolve", fontSize: 20}}>{props.item.key}</Text>
    </TouchableOpacity>
  )
}



export default function PeopleTab(props) {

	return (
		<View style={styles.container}>
    <FlatList
      data={[
        {key: 'Paolino'},
        {key: 'Giacobbe'},
        {key: 'Ursula'},
        {key: 'Micale'},
        {key: 'Genoveffa'},
        {key: 'Pippo'},
        {key: 'pluto'},
        {key: 'cipolla'},
        {key: 'gimmy'},
        {key: 'Tomy'},
        {key: 'Devin'},
        {key: 'Dan'},
        {key: 'Dominic'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'},

      ]}
      renderItem={({item}) => <ItemPeople item = {item} />}
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
    padding: "5%",
  },
});
