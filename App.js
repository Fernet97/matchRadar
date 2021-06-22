import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome, FontAwesome5 , EvilIcons, Entypo, MaterialIcons    } from '@expo/vector-icons';
import WeekList from './Components/WeekList';
import MatchViewer from './Components/MatchViewer';
// TouchableOpacity.defaultProps = { activeOpacity: 0.70}

export default class initialScreen extends React.Component {


    constructor(props) {
      super(props)
      this.state = {
      }
    }


  	render(){

	  return (
      <View style={styles.container}>

        {/*Barra in alto*/}
        <View  style={styles.TopContainer}>
         <Ionicons style={{flex: 7}} name="ios-search-circle" size={60} color="#1272db" />
          <View style={{ flexDirection: 'row', alignItems: "center",
          justifyContent: "space-between", flex: 2}}>
            <TouchableOpacity><EvilIcons name="user" size={35} color="black" /></TouchableOpacity>
            <TouchableOpacity><Ionicons name="ios-settings-outline" size={28} color="black" /></TouchableOpacity>
          </View>
        </View>

        {/* I tuoi Match */}
        <View  style={{flex: 4, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{fontSize: 23, fontWeight:"bold"}}>I tuoi Match</Text>
          <View style = {{flex: 2,  width: "100%", height: "10%", justifyContent: "center"}}>
            <WeekList/>
          </View>
          {/* Mappa del match */}
          <View  style={{flex: 7, width: '100%',  alignItems: "center" }}>
            <MatchViewer nameSport = "Calcio a 5" field = "Palestra Futura"
                        location = "Polla"  hour = "19:00 - 20:00"  partecipanti = "7/10" />
          </View>
        </View>


       {/* Altri match */}
       <View  style={{flex: 3, width: '100%', alignItems: 'center'}}>
         <Text style={{fontSize: 23, fontWeight:"bold"}}>Altri Match</Text>
         {/*<TouchableOpacity style={{marginTop: "20%", backgroundColor: "#1272db", padding: 20, borderRadius: 20}}>
            <Text>Invio Notifica</Text>
         </TouchableOpacity>
        */}
       </View>


       {/*Barra Menu */}
       <View  style={{flex: 1, width: "100%", alignItems: "center"}}>
          <View  style={{ width: "65%", padding: "3%", flexDirection: "row", backgroundColor: "white",
                  height: "65%", borderRadius: 30, alignItems: "center", justifyContent: "space-around",
                  borderWidth: 0.02,
                  shadowColor: "#000",
                  shadowOffset: {
                  	width: 0,
                  	height: 12,
                  },
                  shadowColor: "#000",
                  shadowOffset: {
                  	width: 0,
                  	height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,
                  elevation: 3,
                }}>
            <TouchableOpacity><Entypo name="home" size={28} color="#1272db" /></TouchableOpacity>
            <TouchableOpacity><Entypo name="plus" size={33} color="black" /></TouchableOpacity>
            <TouchableOpacity><MaterialIcons name="search" size={30} color="black" /></TouchableOpacity>
            <TouchableOpacity><Ionicons name="md-notifications-outline" size={27} color="black" /></TouchableOpacity>
          </View>
       </View>


      </View>
	  );

	 }
}





const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '5%',
      justifyContent: 'space-between',
    },

    TopContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: '3%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        // backgroundColor: 'red',
      },


});
