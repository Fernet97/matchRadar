import React, { useState, useEffect } from 'react';
import {Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
TouchableOpacity.defaultProps = { activeOpacity: 0.35}



export default function ListOtherMatch() {
  const [match, updateMatch] = useState([]);
  // Fetching from my API ..
  useEffect(() => {
    const fetchData = async () => {
      // const res = await fetch(
      //   'https://catfact.ninja/fact',
      // );
      // const json = await res.json();
      //console.log(JSON.stringify(json.fact));
      //updateMatch(json.fact); //.fact è un campo
      listMatch =
        {1: {
            "nameSport":"Calcio a 7",
            "nameField": "Palestra Presente",
            "location": "Sala Consilina",
            "hour": "18:00 - 19:00",
            "partecipanti": "9/10",
          },
        2: {
            "nameSport":"Basket",
            "nameField": "Da peppino",
            "location": "Atena Lucana",
            "hour": "20:00 - 21:00",
            "partecipanti": "1/10",
          }
      };
      console.log("eccoci:"+listMatch[1].nameSport);
      updateMatch(listMatch);

    };
    fetchData();
  }, [updateMatch]);


      return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.itemMatch}>
              <View style = {{alignItems: "center", justifyContent: "center", flexDirection: "row"}}>
                <View style = {{alignItems: "center", justifyContent: "center", paddingHorizontal:"1%" }}>
                  <Ionicons name="ios-basketball-outline" size={24} color="#29abe2" />
                </View>
                <View>
                    <Text style = {{fontSize: 16, fontFamily: "evolveBOLD"}}>{listMatch[1].nameField}</Text>
                    <Text style = {{fontSize: 14, fontFamily: "evolve"}}>{listMatch[1].location}</Text>
                    <Text style = {{fontSize: 14, fontFamily: "evolve"}}>{listMatch[1].hour}</Text>
                </View>
              </View>
              <Text style = {{fontSize: 17, fontFamily: "evolveBOLD", paddingHorizontal: "2%"}}>{listMatch[1].partecipanti}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemMatch}>
              <View style = {{alignItems: "center", justifyContent: "center", flexDirection: "row"}}>
                <View style = {{alignItems: "center", justifyContent: "center", paddingHorizontal:"1%" }}>
                  <Ionicons name="ios-basketball-outline" size={24} color="#29abe2" />
                </View>
                <View>
                    <Text style = {{fontSize: 16, fontFamily: "evolveBOLD"}}>{listMatch[2].nameField}</Text>
                    <Text style = {{fontSize: 14, fontFamily: "evolve"}}>{listMatch[2].location}</Text>
                    <Text style = {{fontSize: 14, fontFamily: "evolve"}}>{listMatch[2].hour}</Text>
                </View>
              </View>
              <Text style = {{fontSize: 17, fontFamily: "evolveBOLD", paddingHorizontal: "2%"}}>{listMatch[2].partecipanti}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.vediTutte}>
              <Text style = {{fontSize: 18, fontFamily: "evolveBOLD"}}>Vedi tutti</Text>
            </TouchableOpacity>
        </View>
      )

}


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        width: "90%",
        alignItems: 'center',
        justifyContent: "space-evenly",
        padding: "2%",
      },

    itemMatch : {
      width: "100%",
      height: "30%",
      paddingHorizontal: "2%",
      backgroundColor: "white",
      borderRadius: 15,
      alignItems: "center",
      flexDirection: "row",
      justifyContent:  "space-between",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
        borderWidth: 0.01,
      elevation: 4,
    },

    vediTutte: {
      width: "60%",
      height: "20%",
      backgroundColor: "white",
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
        borderWidth: 0.01,
      elevation: 4,

    }

})
