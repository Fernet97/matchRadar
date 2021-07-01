import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import team1 from '../assets/squadra1.png';
import team2 from '../assets/squadra2.png';

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



function riassuntoTab(props) {
	return (
		<View style={{flex: 1, backgroundColor: "white", justifyContent: 'center', alignItems: 'stretch' }}>
       <View style={styles.Section}>
          <Text style = {{fontFamily: "evolveBOLD",
           fontSize: 22, color:"black"}}>
              Palazzetto
           </Text>
          <Text style = {{fontFamily: "evolve",
           fontSize: 15, color:"black"}}>
              Sala Consilina
           </Text>
          <Text style = {{fontFamily: "evolveBOLD",
           fontSize: 20, color:"black"}}>
              19:00 - 20:00
           </Text>
       </View>

       <View style= {{
         flex: 1, flexDirection: "row", justifyContent: "space-around",
         alignItems: "center",
       }}>
        <View>
          <Text style= {styles.UserItem}>Utente 1 (C)</Text>
          <Text style= {styles.UserItem}>Utente 2</Text>
          <Text style= {styles.UserItem}>Utente 3</Text>
          <Text style= {styles.UserItem}>Utente 4</Text>
          <Text style= {styles.UserItem}>Utente 5</Text>
        </View>

        <View>
          <Text style= {styles.UserItem}>Utente 1 (C)</Text>
          <Text style= {styles.UserItem}>Utente 2</Text>
          <Text style= {styles.UserItem}>Utente 3</Text>
        </View>
       </View>


       <View  style= {{ flex: 1,
         flexDirection: "column", justifyContent: "space-evenly",
         alignItems: "center",
       }}>
          <TouchableOpacity style = {{
            backgroundColor: "#1272db",
            width: "60%",
            height: "30%",
            alignItems: "center",
            borderRadius: 12,
            paddingVertical: "2%",
            justifyContent: "center",
          }}>
            <LinearGradient
              colors={['rgba(41, 171, 226, 0.95)', 'transparent']}
               style = {[styles.gradientContainer, {borderRadius: 12}]}/>
            <Text style = {{fontFamily: "evolve", color: "white",
              fontSize: 18 }}>Invita amici</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {{
            backgroundColor: "red",
            width: "60%",
            height: "30%",
            alignItems: "center",
            borderRadius: 12,
            paddingVertical: "2%",
            justifyContent: "center",
          }}>
              <LinearGradient
                colors={['rgba(255, 255, 255, 0.5)', 'transparent']}
                 style = {[styles.gradientContainer, {borderRadius: 12}]}/>
              <Text style = {{fontFamily: "evolve", color: "white",
                fontSize: 18 }}>Abbandona</Text>
          </TouchableOpacity>
       </View>
    </View>
	);
}

function noteTab(props) {
  console.log("ciaociao");

	return (
		<View style={{flex: 1, backgroundColor: "white", justifyContent: "flex-start", alignItems: 'stretch' }}>
       <View style = {{marginVertical: "20%", marginHorizontal: "5%", alignItems: "flex-start", }}>
        <Text style = {{fontSize: 18, color: "black", fontFamily: "evolveBOLD"}}>
          Raga tutto Peppe, la prima partita è gratis. Raga mi raccomando, maglie gialle e nere.
          Se facciamo i bravi magari anche la prossima è a costo 0.
        </Text>
       </View>
     </View>
	);
}

function commentiTab(props) {
	return (
		<View style={{flex: 1, backgroundColor: "white", justifyContent: 'center', alignItems: 'center' }}>
       <Text>Commenti</Text>
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

      <View  style={{flex: 5, backgroundColor: "pink" }}>
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


});
