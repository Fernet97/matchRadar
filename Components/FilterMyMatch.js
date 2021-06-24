import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import MatchViewer from './MatchViewer';
import WeekList from './WeekList';


TouchableOpacity.defaultProps = { activeOpacity: 0.35}


//Gestisce il fetch e la selezione delle partite da visulizzare
export default function FilterMyMatch() {

  var days = ['Sunday','Monday','Tuesday',
     'Wednesday','Thursday','Friday','Saturday'];
  const [daySelected, setNewDay] = useState("Monday"); // Di default

  let date = new Date();

 //Fissa lo stato al giorno di oggi alprimo rendering
  useEffect(() => {
      setNewDay(days[date.getDay()]);
  }, []);


  const FetchedData = { //simulare tutto il cambio render con dati finti presi da api

  }

  function handleChangeDay(newDay) {
    setNewDay(newDay);
  }

  return (
    <View  style={{flex: 4, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontSize: 25,  fontFamily: 'evolveBOLD'}}>I tuoi Match</Text>
      <View style = {{flex: 2,  width: "100%", height: "10%", justifyContent: "center"}}>
        <WeekList day = {daySelected} startFrom = {days[date.getDay()] ||"Monday"} onChange = {handleChangeDay} />
      </View>
      {/* Mappa del match */}
      <View  style={{flex: 7, width: '100%',  alignItems: "center" }}>
        <MatchViewer nameSport = "Calcio a 5" field = "Palestra Futura"
                    location = "Polla"  hour = "19:00 - 20:00"  partecipanti = "7/10" />
      </View>
    </View>
  );
};
