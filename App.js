import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { Ionicons, Entypo, MaterialIcons    } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import OpenMatchScreen from './Screens/OpenMatchScreen';
import NewMatchScreen from './Screens/NewMatchScreen';
// TouchableOpacity.defaultProps = { activeOpacity: 0.70}





function TopBarForOpenMatch() {
  return (
    <View style={{justifyContent: "flex-start",
    flexDirection: "row", alignItems: 'center' }}>
      <Ionicons name="ios-basketball-outline" size={34} color="white" />
      <Text style = {{fontSize: 20, fontFamily: "evolve", color: "white"}}> 23/06/2021</Text>
    </View>
  )
}



function NotificationsScreen(props) {

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<TouchableOpacity>
       <Text>NOTIFICATION</Text>
      </TouchableOpacity>
    </View>
	);
}

function SearchScreen(props) {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<TouchableOpacity>
       <Text>Schermata di Ricerca</Text>
      </TouchableOpacity>
    </View>
	);
}




// Navigation Bottom Bar
function CustomBottomBar({ state, descriptors, navigation }) {

  function renderItemIcon(nameIcon, isFocused) {
    switch (nameIcon) {
      case "Home":
        return (
          <Entypo name="home" size={28}  color = {isFocused ? '#1272db' : 'black'} />
        );
      case "NewMatch":
        return (
          <Entypo name="plus" size={33} color = {isFocused ? '#1272db' : 'black'} />
        );
      case "Search":
        return (
          <MaterialIcons name="search" size={30}  color = {isFocused ? '#1272db' : 'black'} />
        );
      case "Notifications":
        return (
          <Ionicons name="md-notifications-outline" size={27} color = {isFocused ? '#1272db' : 'black'} />
        );
    }
  };

  return (
    <View  style={{position: 'absolute', bottom: 0, height: "12%", width: "100%", alignItems: "center"}}>
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
               return (
                 <TouchableOpacity key = {route.key}
                    accessibilityRole="button"
                    accessibilityStates={isFocused ? ['selected'] : []}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}>
                    {renderItemIcon(route.name, isFocused )}
                 </TouchableOpacity>
               );
             })}

       </View>
    </View>
  );
}



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabForBottomBar() {
	return (
    <Tab.Navigator  style={styles.container} tabBar={props => <CustomBottomBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="NewMatch" component={NewMatchScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
	);
}


export default function App(props) {

  let [fontsLoaded] = useFonts({
    'evolveBOLD': require('./assets/fonts/evolveBold.otf'),
    'evolve': require('./assets/fonts/evolveLight.otf'),
  });

  if (!fontsLoaded) {
    console.log("font non ancora caricato...");
    return <AppLoading />;
    }
    else {
      console.log("font caricato!");
      return (
        <NavigationContainer>
    			<Stack.Navigator initialRouteName="Tabs">
            <Stack.Screen options={{headerShown: false}} name="Tabs" component={TabForBottomBar} />
    				<Stack.Screen
              options={{
                headerTitle: props => <TopBarForOpenMatch {...props} />,
                headerStyle: {backgroundColor: '#1272db'},
								headerTintColor: 'white',
              }}
              name="OpenMatch" component={OpenMatchScreen} />
    			</Stack.Navigator>
    		</NavigationContainer>
	  );
  }

}





const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: "red",
    },

});
