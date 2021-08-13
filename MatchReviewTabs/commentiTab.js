import React, { useState, useEffect } from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, TextInput, FlatList  } from 'react-native';
import BubbleChat from '../Components/BubbleChat';
import { Ionicons } from '@expo/vector-icons';
import socketIOClient from 'socket.io-client';



export default function commentiTab(props) {

  let data = [ // ci andrebbe listMsg
    // {key: "1", msg: 'Uagliu ma simm sicuri che c so le docce? io m romp r torna a casa tutt zuzzus', me: true, hour: "12:11", writer: "Piero"},
    // {key: "2", msg:  'Sine ja, muovt , non fa muttette', me: false, hour: "12:15", writer: "Piero"},
    // {key: "3", msg: 'babbu 👍', me: true, hour: "12:22", writer: "Giacomo"},
    // {key: "4", msg: 'Oi io sono qua', me: true, hour: "13:06", writer: "Piero"},
    // {key: "5", msg: 'o mi vedi?', me: false, hour: "13:11", writer: "Giacomo"},
  ]

  let FlatListRef  = null; // Riferimento alla lista di msg

  const [msgWritten, setMsgWritten] = useState("")
  const [listMsg, updateListMsg] = useState(data);
  const [WhoAmI, updateMyName] = useState(Math.random().toString(36).substr(2, 7));

 useEffect(() => {
   socket = socketIOClient('http://192.168.1.31:80', {
  		transports: ['websocket'],
  		forceNew: true,
  		upgrade: false,
  	});
    socket.connect();

  	socket.on('connection',  (listMsg) => {
        console.log('Ok mi sono connesso')
        console.log("La conversazione che devi leggere:", listMsg);
        updateListMsg(listMsg);
  	}, () => {});

  	socket.on('disconnect', () => console.log('disconnected'));
    _onNewMsg();

    return () => { // Quando sto smontando il componente ...
       console.log('sto smonando...');
       socket.disconnect();
     }
}, []);



_onNewMsg = () => {
  console.log("C'è un nuovo messaggio in Room ...");
	  socket.on('chat message', (listMsg) => {
      console.log("Tutta la conversazione fin ora:", listMsg);
     updateListMsg(listMsg);
	}, () => {});
}


_sendMessage = () => {
  let date = new Date();
  console.log("Invio messaggio: "+ msgWritten);
  if (msgWritten == "") return;

	socket.emit('chat message', {
		room: 'MatchRadarCommenti',
		writer: WhoAmI,
		msg: msgWritten,
    hour: date.toLocaleTimeString('en-US', { hour12: false,
                                             hour: "numeric",
                                             minute: "numeric"}).slice(0, -3),
		createdAt: date,
	}, () => {
		//NOTHING
	});
	setMsgWritten("");
}


	return(
		<View style={{flex: 1,backgroundColor: "white", justifyContent: 'center' }}>

		<View style = {{flex: 8,  alignItems: "flex-start"}}>
		  <FlatList  style = {{width: "100%"}}
				data={listMsg}
				renderItem={({item}) => <BubbleChat  Iam= {item.writer == WhoAmI? true : false} text= {item.msg} hour = {item.hour} author= {item.writer}/>}
        ref={ref => (FlatListRef = ref)}
        onContentSizeChange={() => FlatListRef.scrollToEnd()} // scroll it

        />
		</View>

      <View style = {{ flex: 2, Direction: "row", flexDirection: "row",
       justifyContent: "center", alignItems: "center"}}>
        <TextInput
          value = {msgWritten}
          style={styles.TextInput}
          placeholder="Scrivi un commento ..."
					onChangeText={chatMessage => {
						// console.log(chatMessage);
            setMsgWritten(chatMessage);
				 }}
          />
          <TouchableOpacity onPress= {() => this._sendMessage()}>
            <Ionicons name="arrow-redo-circle" size={44} color="#1272db" />
          </TouchableOpacity>
      </View>
    </View>
	);
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "stretch",
      justifyContent: "center",
      backgroundColor: "white",
    },


  gradientContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    borderRadius: 20,
    paddingVertical: "2%",
  },


  UserItem: {
    fontFamily: "evolve",
    fontSize: 18,
    color: "black",
  },

  TextInput: {
    height: 40,
    margin: 12,
    width: "70%",
    paddingHorizontal: 15,
    fontFamily: "evolveBOLD",
    borderRadius: 20,
    backgroundColor: 'rgba(52, 52, 52, 0.2)'
  },

});
