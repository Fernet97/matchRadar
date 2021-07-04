import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CalendarList,LocaleConfig } from 'react-native-calendars';
import DateTimePickerModal from "react-native-modal-datetime-picker";


export default function WhenMatchTab(props) {


  LocaleConfig.locales['fr'] = {
  monthNames: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
  monthNamesShort: ['Gem.','Feb.','Marz.','Apr.','Mag.','Giu.','Lugl.','Ago.','Sett..','Ott.','Nov.','Dic.'],
  dayNames: ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'],
  dayNamesShort: ['Dom.','Lun.','Mar.','Mer.','Gio.','Ven.','Sab.'],
  today: 'Oggi'
};
LocaleConfig.defaultLocale = 'fr';


const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

const showTimePicker = () => {
  setTimePickerVisibility(true);
};

const hideTimePicker = () => {
  setTimePickerVisibility(false);
};

const handleConfirm = (hour) => {
  console.log("Orario preso: ", hour);
  hideTimePicker();
};

  return(
    <View style={{ backgroundColor: "#1272db", flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
      <LinearGradient
        colors={['rgba(41, 171, 226, 0.90)', 'transparent']}
         style = {styles.gradientContainer}/>

         <Text style = {{fontFamily: "evolveBOLD", width: "100%", textAlign: "left",
         fontSize: 35, color: "white", marginBottom: "12%"}}>  Quando si gioca?</Text>

        <View style= {styles.coverWhite}>
        <View style= {{marginBottom: "10%"}}>
          <CalendarList
            // Callback which gets executed when visible months change in scroll view. Default = undefined
            //onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
            // Max amount of months allowed to scroll to the past. Default = 50
            pastScrollRange={50}
            // Max amount of months allowed to scroll to the future. Default = 50
            futureScrollRange={50}
            // Enable or disable scrolling of calendar list
            scrollEnabled={true}
            // Enable or disable vertical scroll indicator. Default = false
            showScrollIndicator={true}
            disableAllTouchEventsForDisabledDays={true}
            theme = {{textMonthFontFamily: 'evolveBOLD', textDayFontFamily: 'evolveBOLD', textDayHeaderFontFamily: 'evolveBOLD',}}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'space-between', padding: 20, alignItems: 'center',
        flexDirection: "row",borderTopWidth: 1, borderBottomWidth: 1, borderColor: "rgba(52, 52, 52, 0.2)" }}>
          <Text style = {{fontFamily: "evolveBOLD", fontSize: 20}}>Orario</Text>

          <View style={{justifyContent: "center", alignItems: "center", flexDirection:"row"}}>
            <TouchableOpacity
              style = {{borderColor: "rgba(52, 52, 52, 0.2)", borderWidth: 1, width: 80,
              alignItems: "center", borderRadius: 12,}}
              onPress={showTimePicker}>
                <Text style = {{fontFamily: "evolveBOLD", fontSize: 18, padding: 5,}} >17:00</Text>
               <DateTimePickerModal
                 isVisible={isTimePickerVisible}
                 mode="time"
                 onConfirm={handleConfirm}
                 onCancel={hideTimePicker}
               />
             </TouchableOpacity>

             <Text  style = {{fontFamily: "evolveBOLD", fontSize: 20}}> - </Text>

             <TouchableOpacity
               style = {{borderColor: "rgba(52, 52, 52, 0.2)", borderWidth: 1, width: 80,
               alignItems: "center", borderRadius: 12,}}
               onPress={showTimePicker}>
                 <Text style = {{fontFamily: "evolveBOLD", fontSize: 18, padding: 5,}} >18:00</Text>
                <DateTimePickerModal
                  isVisible={isTimePickerVisible}
                  mode="time"
                  onConfirm={handleConfirm}
                  onCancel={hideTimePicker}
                />
              </TouchableOpacity>

          </View>
        </View>

      </View>
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

buttonSport : {
  backgroundColor: "white",
  paddingVertical: 0,
  paddingHorizontal: 30,
  borderRadius: 20,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginVertical: 15,
  shadowOffset: {
  	width: 0,
  	height: 7,
  },
  shadowOpacity: 0.41,
  shadowRadius: 9.11,

  elevation: 14,
},

coverWhite: {
  width: "100%",
  height: "80%",
  backgroundColor: "white",
  borderTopLeftRadius:25,
  borderTopRightRadius: 25 ,
  justifyContent: "center",
  alignItems:"stretch",
  padding: "10%",
  paddingBottom: "50%",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity: 0.41,
  shadowRadius: 9.11,

  elevation: 14,

}

});
