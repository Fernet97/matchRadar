import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, TextInput, FlatList} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import WeekList from '../Components/WeekList';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PeopleTab from '../SearchMatchTabs/PeopleTab';
import FieldTab from '../SearchMatchTabs/FieldTab';

import MatchItem from '../Components/MatchItem';




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



// Navigation tra persone e campetti
function CustomTabBar({ state, descriptors, navigation }) {

  return (
    <View  style={{position: 'absolute', top: 0, height: 60, width: "100%", marginTop: "2%", alignItems: "stretch"}}>
      <View  style={{flexDirection: "row", height: "65%", borderBottomWidth: 1,
                  alignItems: "center", justifyContent: "space-evenly"}}>

           {state.routes.map((route, index) => {
               const { options } = descriptors[route.key];
               const label =
                 options.tabBarLabel !== undefined
                   ? options.tabBarLabel
                   : options.title !== undefined
                   ? options.title
                   : route.name;

               const isFocused = state.index === index;

               const onPress = () => {
                 const event = navigation.emit({
                   type: 'tabPress',
                   target: route.key,
                 });
                 if (!isFocused && !event.defaultPrevented) {
                   navigation.navigate(route.name);
                 }
                 console.log("selezionato: "+ route.name );
               };

               const onLongPress = () => {
                 navigation.emit({
                   type: 'tabLongPress',
                   target: route.key,
                 });
               };

               if(isFocused)
               return (
                 <TouchableOpacity
                    style = {{height: "100%",justifyContent: "center", borderBottomWidth: 3}}
                    key = {route.key}
                    accessibilityRole="button"
                    accessibilityStates={isFocused ? ['selected'] : []}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}>


                    <Text style = {{
                      fontFamily: "evolveBOLD",
                      fontSize: 20,
                      color:"black",
                    }}>
                      {route.name}
                   </Text>
                  </TouchableOpacity>
               );
               else return (
                 <Text onPress={onPress} key = {route.key}
                 style = {{
                   fontFamily: "evolve",
                   fontSize: 20,
                   color:"black",
                 }}>
                   {route.name}
                </Text>
               );

             })}

       </View>
    </View>
  );
}






const Tab = createBottomTabNavigator();

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
               <View style={styles.containerList}>
               <FlatList
                 data={[
                   {key: 'match1'},
                   {key: 'match2'},
                   {key: 'match3'},
                   {key: 'match4'},
                   {key: 'match5'},
                   {key: 'match6'},
                   {key: 'match7'},
                   {key: 'match8'},
                   {key: 'match9'},
                   {key: 'match10'},
                   {key: 'match11'},

                 ]}
                 renderItem={({item}) => <MatchItem item = {item} />}
                 contentContainerStyle={{ paddingBottom: "30%"}}
                 style = {{paddingHorizontal: "3%"}}
               />
                </View>
             </View>
           ) :(
             <View style = {styles.coverWhite}>
                  <View style = {{width: "100%", flex: 1, paddingTop: "18%"}}>
                   <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
                     <Tab.Screen name="Persone" component={PeopleTab} />
                     <Tab.Screen name="Campi" component={FieldTab} />
                   </Tab.Navigator>
                  </View>
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

    containerList: {
     flex: 1,
    },
  })
