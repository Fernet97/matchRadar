import React, { Component } from 'react'
import {Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
TouchableOpacity.defaultProps = { activeOpacity: 1}

class MatchViewer extends React.Component {

  constructor(props) {
    super(props);
  }


   render() {

      return (
        <TouchableOpacity activeOpacity={1} style={styles.container} onPress={this.props.callbackForOpenMatch} >

        {/*Rettangolo di congiunzione*/}
        <LinearGradient  style={{ width: '28%', backgroundColor: "#1272db",
          alignItems: 'center', justifyContent: 'center',
         height: "25%",
         position: 'relative',
         top: "4%",
         transform: [{ rotate: '28deg'}],
         left: "13%",
       }}
         colors={['#1272db','#29abe2']} //scuro, chiaro
         />


          {/*Cerchio bianco fantasma1*/}
          <View  style={{ width: '15%', backgroundColor: "white",
          alignItems: 'center', justifyContent: 'center',
           borderRadius: 200, height: "30%",
           position: 'absolute',
           top: "27%",
           right: "27%",
           transform: [{ rotate: '15deg'}],
         }}/>

         {/*Cerchio bianco fantasma1*/}
         <View  style={{ width: '15%', backgroundColor: "white",
         alignItems: 'center', justifyContent: 'center',
          borderRadius: 200, height: "30%",
          position: 'absolute',
          top: "64%",
          right: "38%",
          transform: [{ rotate: '20deg'}],
        }}/>

        {/*Cerchio Primario*/}
        <LinearGradient  style={{ width: '52%',  borderWidth: 0.08,
        alignItems: 'center', justifyContent: 'center',
         borderRadius: 200, height: "80%",
         position: 'absolute',
         bottom: "20%",
         left: "6%",
         padding: 20,
         shadowColor: "#000",
         shadowOffset: {
           width: 0,
           height: 6,
          },
         shadowOpacity: 0.37,
         shadowRadius: 7.49,
         elevation: 12,
       }}
       colors={['#29abe2','#1272db']}>
        <Text style= {{fontFamily: "evolve", fontSize: 14, color: "white", marginBottom: "10%"}}>{this.props.nameSport}</Text>
        <Text style= {{fontSize: 19, color: "white", fontFamily: "evolveBOLD"}}>{this.props.field}</Text>
        <Text style= {{fontSize: 16, color: "white", fontFamily: "evolve"}}>{this.props.location}</Text>
        <Text style= {{fontSize: 19, color: "white", fontFamily: "evolveBOLD"}}>{this.props.hour}</Text>
      </LinearGradient>

          {/*Cerchio Partecipanti*/}
          <LinearGradient  style={{ width: '26%', backgroundColor: "#1272db",
          alignItems: 'center', justifyContent: 'center',
           borderRadius: 200, height: "40%", borderWidth: 0.08,
           position: 'absolute',
           bottom: "10%",
           right: "12%",
           shadowColor: "#000",
           shadowOffset: {
            	width: 0,
            	height: 6,
            },
           shadowOpacity: 0.37,
           shadowRadius: 7.49,
           elevation: 12,
          }}
          colors={['#29abe2','#1272db']}>
            <FontAwesome5 name="users" size={30} color="white" />
            <Text style= {{fontSize: 19, fontFamily: "evolveBOLD", color: "white"}}>{this.props.partecipanti}</Text>
          </LinearGradient>


        </TouchableOpacity>
      )
   }
}
export default MatchViewer

const styles = StyleSheet.create ({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "row",
      backgroundColor: "white",
      aspectRatio: 1.5, //Mantiene le proporzioni
    },


})
