import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import DisclaimerTab from '../NewMatchTabs/DisclaimerTab';
import SelectSportTab from '../NewMatchTabs/SelectSportTab';
import WhenMatchTab from '../NewMatchTabs/WhenMatchTab';
import WhoMatchTab from '../NewMatchTabs/WhoMatchTab';
import Logo from '../assets/icon.png';

export default function NewMatchScreen(props) {
  const slides = [
    {
      key: 'disclaimer',
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      backgroundColor: '#59b2ab',
    },
    {
      key: 'SelectSport',
      title: 'Title 2',
      text: 'Other cool stuff',
      backgroundColor: '#febe29',
    },
    {
      key: 'WhenMatch',
      title: 'Rocket guy',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
      backgroundColor: '#22bcb5',
    },
    {
      key: 'WhoMatch',
      title: 'Title 2',
      text: 'Other cool stuff',
      backgroundColor: '#febe29',
    },
  ];

  renderItem = ({ item }) => { //item.title per accedere ai campi dati

    switch (item.key) {
      case 'disclaimer':
        return (
            <DisclaimerTab/>
        );
      case 'SelectSport':
      return (
          <SelectSportTab/>
      );
      case 'WhenMatch':
      return (
          <WhenMatchTab/>
      );
      case 'WhoMatch':
      return (
          <WhoMatchTab/>
      );
      default:
    }
}
onDone = () => {
  console.log("tutto bene");
}




  return (
		<View style={{ flex: 1,  justifyContent: 'center', alignItems: 'center', flexDirection: "row"}}>
      <AppIntroSlider
        dotStyle = {{marginBottom: "60%", backgroundColor: 'rgba(52, 52, 52, 0.3)'}}
        activeDotStyle = {{marginBottom: "60%", backgroundColor: 'white'}}
        dotClickEnabled = {false}
        renderItem={renderItem}
        data={slides} onDone={onDone}
        showNextButton = {false}
      />
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
});
