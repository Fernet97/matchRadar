import React, { Component } from 'react'
import {Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
TouchableOpacity.defaultProps = { activeOpacity: 0.35}


class ListOtherMatch extends Component {




   render() {

      return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.itemMatch}>
              <Text style = {{fontSize: 18, fontFamily: "evolve"}}>Scrivo qualcosa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemMatch}>
              <Text style = {{fontSize: 18, fontFamily: "evolveBOLD"}}>Scrivo qualcosa chiatto</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.vediTutte}>
              <Text style = {{fontSize: 18, fontFamily: "evolveBOLD"}}>Vedi tutti</Text>
            </TouchableOpacity>
        </View>
      )
   }
}
export default ListOtherMatch

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
      backgroundColor: "white",
      borderRadius: 15,
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
