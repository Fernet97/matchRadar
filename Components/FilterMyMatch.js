import React, { useState } from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import MatchViewer from './MatchViewer';
import { LinearGradient } from 'expo-linear-gradient';

TouchableOpacity.defaultProps = { activeOpacity: 0.35}


//Gestisce il fetch e la selezione delle partite da visulizzare
export default function FilterMyMatch() {

  const [daySelected, setNewDay] = useState("Friday");

  function handleChangeDay(newDay) {
    setNewDay(newDay);
  }

  return (
    <View  style={{flex: 4, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize: 25,  fontFamily: 'evolveBOLD'}}>I tuoi Match</Text>
      <View style = {{flex: 2,  width: "100%", height: "10%", justifyContent: "center"}}>
        <WeekList day = {daySelected}  onChange =  {handleChangeDay} />
      </View>
      {/* Mappa del match */}
      <View  style={{flex: 7, width: '100%',  alignItems: "center" }}>
        <MatchViewer nameSport = "Calcio a 5" field = "Palestra Futura"
                    location = "Polla"  hour = "19:00 - 20:00"  partecipanti = "7/10" />
      </View>
    </View>
  );
};



// Giorni settimana
function WeekList(propsParent) {

   const mapNameDays = {
        "Monday" : "L" ,
        "Tuesday" : "M" ,
        "Wednesday" : "M" ,
        "Thursday" : "G" ,
        "Friday" : "V" ,
        "Saturday" : "S" ,
        "Sunday" : "D" ,
       };

   function ItemDay(props) {
     //Se il giorno selezionato combacia con un item da renderizzare
     if(propsParent.day == props.day)
       return(
         <LinearGradient  colors={['#29abe2','#1272db']} style={stylesWeekList.dayItem}>
           <Text style={{fontFamily: "evolveBOLD", fontSize: 15, color: "white"}}>{mapNameDays[props.day]}</Text>
         </LinearGradient>
       );

     return(
       <TouchableOpacity onPress = {() => propsParent.onChange(props.day)} style={stylesWeekList.dayItem} >
         <Text style={{fontFamily: "evolveBOLD", fontSize: 15}}>{mapNameDays[props.day]}</Text>
      </TouchableOpacity>
     );
   }
       return (
         <View style={stylesWeekList.container}>
           <ItemDay day = "Monday"/>
           <ItemDay day = "Tuesday"/>
           <ItemDay day = "Wednesday"/>
           <ItemDay day = "Thursday"/>
           <ItemDay day = "Friday"/>
           <ItemDay day = "Saturday"/>
           <ItemDay day = "Sunday"/>
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
