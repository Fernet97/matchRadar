import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import WeekList from '../Components/WeekList';


function SearchBar(props) {

  function submitSearch(event){
    props.parentCallback(event.nativeEvent.text);
  }

  return (
    <View style = {{backgroundColor: "white", width: "85%",
      flexDirection: "row", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: {
      	width: 0,
      	height: 10,
      },
      shadowOpacity: 0.51,
      shadowRadius: 13.16,

      elevation: 20,
    }}>

        <Ionicons name="search" size={24} color="black" />
        <TextInput
          style={styles.TextInput}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder= "Cerca"
          onSubmitEditing= {(event) => submitSearch(event)}
          />

    </View>
  )
}




export default  function  SearchScreen(props) {


  var days = ['Sunday','Monday','Tuesday',
     'Wednesday','Thursday','Friday','Saturday'];


  const [daySelected, setNewDay] = useState("Monday"); // Di default
  let date = new Date();
 //Fissa lo stato al giorno di oggi alprimo rendering
  useEffect(() => {
      setNewDay(days[date.getDay()]);
  }, []);

    function handleChangeDay(newDay) {
      setNewDay(newDay);
    }


   const [isTextSearch, flipSearchMode] = useState(false); // Di default

    handleSearch = (text) => {
      console.log("La barra mi dice: "+ text);
      flipSearchMode(true)
   }

  return(
    <View style={{ backgroundColor: "#1272db", flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LinearGradient
        colors={['rgba(41, 171, 226, 0.90)', 'transparent']}
         style = {styles.gradientContainer}/>

         <View style = {{flex: 2,width: "100%", flexDirection:"row",
          justifyContent: "center", alignItems: "flex-end", marginBottom: "5%"}}>
          {isTextSearch ? (
            <TouchableOpacity onPress = {() => flipSearchMode(false)}>
              <Ionicons name="arrow-back" size={30} color="white" />
            </TouchableOpacity>): (null)}
            <SearchBar parentCallback = {handleSearch}/>
         </View>

         {!isTextSearch ?
           (
             <View style = {styles.coverWhite}>
               <View style = {{ width: "100%", height: "10%", justifyContent: "center", marginVertical: "5%"}}>
                  <WeekList day = {daySelected} startFrom = {days[date.getDay()] ||"Monday"} onChange = {handleChangeDay} />
               </View>
                <Text>CIao</Text>
                <Text>CIao</Text>
                <Text>CIao</Text>
             </View>
           ) :(
             <View style = {styles.coverWhite}>
                <Text>Per la navigazione tra tab persone e campi usare stressa logica in OpenMatch con Riassunto/note/Commenti</Text>
             </View>

           )
         }
    </View>
  );

}


const styles = StyleSheet.create({

  gradientContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 800,
    },

    coverWhite: {
      width: "100%",
      flex: 11,
      backgroundColor: "white",
      borderTopLeftRadius:25,
      borderTopRightRadius: 25 ,
      justifyContent: "flex-start",
      alignItems:"stretch",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,

      elevation: 14,

    },


    TextInput: {
      width: "90%",
      marginHorizontal: 5,
      fontFamily: "evolveBOLD",
    },
  })
