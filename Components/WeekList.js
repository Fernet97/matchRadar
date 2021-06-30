import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
TouchableOpacity.defaultProps = { activeOpacity: 0.35}


// Giorni settimana
export default function WeekList(propsParent) {

   const mapNameDays = {
        "Monday" : "L" ,
        "Tuesday" : "M" ,
        "Wednesday" : "M" ,
        "Thursday" : "G" ,
        "Friday" : "V" ,
        "Saturday" : "S" ,
        "Sunday" : "D" ,
       };
   var week = new Array(
       "Monday",
       "Tuesday",
       "Wednesday",
       "Thursday",
       "Friday",
       "Saturday",
       "Sunday",
     );


   function ItemDay(props) {
       //Se il giorno selezionato combacia con un item da renderizzare
       if(propsParent.day == props.day)
         return(
           <LinearGradient  colors={['#29abe2','#1272db']} style={stylesWeekList.dayItem}>
             <Text style={{fontFamily: "evolveBOLD", fontSize: 15,  color: propsParent.startFrom == props.day? "#ff0000" : "white" }}>{mapNameDays[props.day]}</Text>
           </LinearGradient>
         );

       return(
         <TouchableOpacity onPress = {() => propsParent.onChange(props.day)} style={stylesWeekList.dayItem} >
           <Text style={{fontFamily: "evolveBOLD", fontSize: 15, color: propsParent.startFrom == props.day? "#ff0000" : "black"  }}>{mapNameDays[props.day]}</Text>
        </TouchableOpacity>
       );
  }

  var listDayItems = [];

  for (let i = 0; i < 7; i++) {
    let dayShifted = [i+ week.indexOf(propsParent.startFrom)] % 7;
    listDayItems.push(<ItemDay day = {week[dayShifted]} key= {i} />);
  }

   return (
     <View style={stylesWeekList.container}>
      {listDayItems}
     </View>
   )
}

const stylesWeekList = StyleSheet.create ({
  container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },

    dayItem: {
      width: 35,
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 100,
      backgroundColor: '#DCDCDC',
      shadowColor: "#000",
      shadowOffset: {
      	width: 0,
      	height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,

    },

})

//***********************
