import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function riassuntoTab(props) {
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
