import React, { useState, useEffect } from 'react';
import {Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
TouchableOpacity.defaultProps = { activeOpacity: 0.35}



export default function ListOtherMatch(props) {
  const [match, updateMatch] = useState(null);

  // Fetching from my API ..
  useEffect(() => {
  const fetchData = async () => {
    const result = await fetch('https://catfact.ninja/fact');
     const json = await result.json();
     console.log("\n"+json.fact+"\n");
    updateMatch(json.fact);
  };
    fetchData();
  }, [props]); //Si aggiorna quando cambia il prop magari...


      return (
        <View style={styles.container}>
         <TouchableOpacity style={styles.itemMatch}>
              <View style = {{alignItems: "center", justifyContent: "center", flexDirection: "row"}}>
                <View style = {{alignItems: "center", justifyContent: "center", paddingHorizontal:"1%" }}>
                  <Ionicons name="ios-basketball-outline" size={24} color="#29abe2" />
                </View>
                <View>
                    <Text style = {{fontSize: 16, fontFamily: "evolveBOLD"}}>Palazzetto</Text>
                    <Text style = {{fontSize: 14, fontFamily: "evolve"}}>Sala Consilina</Text>
                    <Text style = {{fontSize: 14, fontFamily: "evolve"}}>16:00 - 17: 00</Text>
                </View>
              </View>
              <Text style = {{fontSize: 17, fontFamily: "evolveBOLD", paddingHorizontal: "2%"}}>6/10</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemMatch}>
                 <View style = {{alignItems: "center", justifyContent: "center", flexDirection: "row"}}>
                   <View style = {{alignItems: "center", justifyContent: "center", paddingHorizontal:"1%" }}>
                     <Ionicons name="ios-basketball-outline" size={24} color="#29abe2" />
                   </View>
                   <View>
                       <Text style = {{fontSize: 16, fontFamily: "evolveBOLD"}}>Palazzetto</Text>
                       <Text style = {{fontSize: 14, fontFamily: "evolve"}}>Sala Consilina</Text>
                       <Text style = {{fontSize: 14, fontFamily: "evolve"}}>16:00 - 17: 00</Text>
                   </View>
                 </View>
                 <Text style = {{fontSize: 17, fontFamily: "evolveBOLD", paddingHorizontal: "2%"}}>6/10</Text>
               </TouchableOpacity>


            <TouchableOpacity style={styles.vediTutte} onPress={props.callbackForSearch}>
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
