/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, {Component} from 'react';
 import ReactNative from 'react-native';
 import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
 const { NetAloSDK } = ReactNative.NativeModules;
 
 type Props = {};
 export default class App extends Component<Props> {

   constructor(props) {
     super(props);
     this.state = {text: ''};
     
     // Set current user
     NetAloSDK.setUser(
         281474976710685,
         '80d26f8e23eb8756ffd39182d455e060bd85916c',
         'a6hIg_MRfWKSPeAXkkxAjA6coypt1y6j1KtJAkbd9k_E2w46wZuU4mbhNvA4Uzdl',
         'XX',
         '+84969143732'
    )
   }
   render() {
     return (
       <View style={styles.container}>
         <Text>NetAloSDK Demo Application, Please select an option:</Text>
         <View style={styles.marginButton}/>
         <Button
           onPress={() => {NetAloSDK.showListConversations()}}
           title="Show List Conversations"
           color="#841584"
           accessibilityLabel="Learn more about this purple button" />
           <View style={styles.margin}/>
           <Text>NetAloSDK open with User.</Text>
           <View style={styles.marginButton}/>
           <Button
        title="Open Chat User"
        color = "#841584"
        onPress={() => NetAloSDK.openChatWithUser("281474977316610", "0a97814ce05d77d44ed9f39169f6f2ddbc345a2d")}/>
        <View style={styles.margin}/>
       <TextInput
        style={styles.input}
         multiline={false}
         placeholder="Input phone number of user you want to start chat"
         onChangeText={(text) => this.setState({text})}
       />
       <Button
         onPress={() => {NetAloSDK.showChatWithPhone(this.state.text)}}
         title="Show Chat"
         color="#841584"
         accessibilityLabel="Learn more about this purple button" />
       </View>
       
     );
   }
 }


 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
   input: {
    height: 50,
    padding: 10,
    margin: 18,
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#48BBEC',
    backgroundColor: 'rgba(0,0,0,0)',
  },
   margin: {
    height: 20
  },
  marginButton: {
    height: 10
  },
 });
