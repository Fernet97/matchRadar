import React, { Component } from 'react'
import {Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
TouchableOpacity.defaultProps = { activeOpacity: 0.35}


class WeekList extends Component {


renderDays(){



}


   render() {

      return (
        <View style={styles.container}>
            <LinearGradient colors={['#29abe2','#1272db']} style={styles.dayItem}>
              <Text style={{fontWeight: "bold", fontSize: 15, color: "white"}}>L</Text>
           </LinearGradient>
           <TouchableOpacity style={styles.dayItem} >
             <Text style={{fontWeight: "bold", fontSize: 15}}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dayItem} >
            <Text style={{fontWeight: "bold", fontSize: 15}}>M</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.dayItem} >
           <Text style={{fontWeight: "bold", fontSize: 15}}>G</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dayItem} >
          <Text style={{fontWeight: "bold", fontSize: 15}}>V</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.dayItem} >
         <Text style={{fontWeight: "bold", fontSize: 15}}>S</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.dayItem} >
        <Text style={{fontWeight: "bold", fontSize: 15}}>D</Text>
     </TouchableOpacity>

        </View>
      )
   }
}
export default WeekList

const styles = StyleSheet.create ({
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
