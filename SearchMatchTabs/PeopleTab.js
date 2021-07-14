import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function PeopleTab(props) {

	return (
		<View style={{flex: 1, backgroundColor: "white", justifyContent: "flex-start", alignItems: 'stretch' }}>
        <Text>PEOPLE</Text>
     </View>
	);
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "stretch",
      justifyContent: "center",
    },

});
