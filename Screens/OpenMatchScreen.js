import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, TextInput } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import team1 from '../assets/squadra1.png';
import team2 from '../assets/squadra2.png';
import riassuntoTab from '../MatchReviewTabs/riassuntoTab';
import commentiTab from '../MatchReviewTabs/commentiTab';
import noteTab from '../MatchReviewTabs/noteTab';
import { Ionicons } from '@expo/vector-icons';

// Navigation Bottom Bar
function CustomMatchBar({ state, descriptors, navigation }) {

  return (
    <View  style={{position: 'absolute', top: 0, height: 80, width: "100%", alignItems: "stretch"}}>
      <View  style={{flexDirection: "row", height: "65%",
                  alignItems: "center", justifyContent: "space-evenly"}}>

           {state.routes.map((route, index) => {
               const { options } = descriptors[route.key];
               const label =
                 options.tabBarLabel !== undefined
                   ? options.tabBarLabel
                   : options.title !== undefined
                   ? options.title
                   : route.name;

               const isFocused = state.index === index;

               const onPress = () => {
                 const event = navigation.emit({
                   type: 'tabPress',
                   target: route.key,
                 });
                 if (!isFocused && !event.defaultPrevented) {
                   navigation.navigate(route.name);
                 }
                 console.log("selezionato: "+ route.name );
               };

               const onLongPress = () => {
                 navigation.emit({
                   type: 'tabLongPress',
                   target: route.key,
                 });
               };

               if(isFocused)
               return (
                 <TouchableOpacity
                    style = {styles.button}
                    key = {route.key}
                    accessibilityRole="button"
                    accessibilityStates={isFocused ? ['selected'] : []}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}>

                    <LinearGradient
                    colors={['rgba(41, 171, 226, 0.95)', 'transparent']}
                     style = {styles.gradientContainer}/>

                    <Text style = {{
                      fontFamily: "evolve",
                      fontSize: 20,
                      color:"white",
                    }}>
                      {route.name}
                   </Text>
                  </TouchableOpacity>
               );
               else return (
                 <Text onPress={onPress} key = {route.key}
                 style = {styles.textButton}>
                   {route.name}
                </Text>
               );

             })}

       </View>
    </View>
  );
}




const Tab = createBottomTabNavigator();
export default  function  OpenMatchScreen(props) {
	return (
    <View style = {styles.container}>
      <View style = {{flex: 2, justifyContent: "center", flexDirection: "row",
          alignItems: "center"}}>
        <Image source={team1} style={{width: 100, height: 100}} />
        <Text style = {{fontSize: 20, fontFamily: "evolveBOLD"}}>  VS  </Text>
        <Image source={team2} style={{width: 100, height: 100}} />
      </View>

      <View  style={{flex: 5 }}>
          <Tab.Navigator tabBar={props => <CustomMatchBar {...props} />}>
            <Tab.Screen name="Riassunto" component={riassuntoTab} />
            <Tab.Screen name="Note" component={noteTab} />
            <Tab.Screen name="Commenti" component={commentiTab} />
          </Tab.Navigator>
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

  Section :{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
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
