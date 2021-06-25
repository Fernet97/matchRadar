import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import MatchViewer from './MatchViewer';
import WeekList from './WeekList';


TouchableOpacity.defaultProps = { activeOpacity: 0.35}


//Gestisce il fetch e la selezione delle partite da visulizzare
export default function FilterMyMatch() {

  var days = ['Sunday','Monday','Tuesday',
     'Wednesday','Thursday','Friday','Saturday'];

 const italianDays = {
      "Monday" : "lunedì" ,
      "Tuesday" : "martedì" ,
      "Wednesday" : "mercoledì" ,
      "Thursday" : "giovedì" ,
      "Friday" : "venerdì" ,
      "Saturday" : "sabato" ,
      "Sunday" : "domenica" ,
     };

  const [daySelected, setNewDay] = useState("Monday"); // Di default
  let date = new Date();
 //Fissa lo stato al giorno di oggi alprimo rendering
  useEffect(() => {
      setNewDay(days[date.getDay()]);
  }, []);

  //Fetch data mie partite fino ai 7 giorni successivi
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
      {"Monday": {
          "nameSport":"Calcio a 7",
          "nameField": "Palestra Presente",
          "location": "Sala Consilina",
          "hour": "18:00 - 19:00",
          "partecipanti": "9/10",
        },
      "Thursday": {
          "nameSport":"Basket",
          "nameField": "Da peppino",
          "location": "Atena Lucana",
          "hour": "20:00 - 21:00",
          "partecipanti": "1/10",
        },
      "Friday": {
          "nameSport":"Tennis",
          "nameField": "Zi Pepp",
          "location": "Padula",
          "hour": "12:00 - 13:00",
          "partecipanti": "1/4",
        }
      };

      //console.log(listMatch.Friday.nameSport);

      updateMatch(listMatch);

    };
    fetchData();
  }, [updateMatch]);


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
      <View  style={{flex: 7, width: '100%',  alignItems: "center" , justifyContent: "center"}}>
        {match[daySelected] ?(
        <MatchViewer nameSport = {match[daySelected].nameSport} field = {match[daySelected].nameField}
                    location = {match[daySelected].location}  hour = {match[daySelected].hour}  partecipanti = {match[daySelected].partecipanti} />
        ): (
          <Text style={{fontSize: 25,  fontFamily: 'evolve', paddingHorizontal: "10%", textAlign: 'center'}}>
            Nessun match in programma per {days[date.getDay()] == daySelected ? "oggi" : italianDays[daySelected]}.
          </Text>
        )}
      </View>
    </View>
  );
};
