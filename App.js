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
   render() {
     return (
       <View style={styles.container}>
         <Text style={styles.title}>NetAloSDK Demo React Native</Text>
         <View style={styles.margin100}/>
         <Text>NetAloSDK Demo Application, Please select an option:</Text>
         <View style={styles.marginButton}/>
         <Button
           onPress={() => {
            NetAloSDK.setUser(
              "281474976981354",
                 '9c98a74053f60334758b9dd82d5e8dbe77b5d2b6',
                 'a6hIg_MRfWKSPeAXkkxAjA6coypt1y6j1KtJAkbd9k_E2w46wZuU4mbhNvA4Uzdl',
                 'XX',
                 '+84969143732'
            )
            }}
           title="Set User A"
           color="#841584"
           accessibilityLabel="Learn more about this purple button" />
           <View style={styles.margin}/>

           <Button
           onPress={() => {
            NetAloSDK.setUser(
                 '281474977755104',
                 '28eccfda4d9c9cd78d2b775fce4464cb2a24a4ec',
                 'a6hIg_MRfWKSPeAXkkxAjA6coypt1y6j1KtJAkbd9k_E2w46wZuU4mbhNvA4Uzdl',
                 'XX',
                 '+84969143732'
            )
            }}
           title="Set User B"
           color="#841584"
           accessibilityLabel="Learn more about this purple button" />
           <View style={styles.margin}/>

         <Button
           onPress={() => {NetAloSDK.showListConversations()}}
           title="Show List Conversations"
           color="#841584"
           accessibilityLabel="Learn more about this purple button" />
           <View style={styles.margin}/>
           <Text>NetAloSDK open with User A</Text>
           <View style={styles.marginButton}/>
           <Button
        title="Open Chat User A"
        color = "#841584"
        onPress={() => NetAloSDK.openChatWithUser("281474976981354", "9c98a74053f60334758b9dd82d5e8dbe77b5d2b6")}/>
        <Text>NetAloSDK open with User B</Text>
           <View style={styles.marginButton}/>
           <Button
        title="Open Chat User B"
        color = "#841584"
        onPress={() => NetAloSDK.openChatWithUser("281474977755104", "28eccfda4d9c9cd78d2b775fce4464cb2a24a4ec")}/>
        {/* <View style={styles.margin}/>
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
         accessibilityLabel="Learn more about this purple button" /> */}
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
  title: {
    fontSize: 22,
    color: '#48BBEC',
  },
   margin: {
    height: 20
  },
  margin100: {
    height: 100
  },
  marginButton: {
    height: 10
  },
 });
