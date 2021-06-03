/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, useState } from "react";
import ReactNative from "react-native";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
const { NetAloSDK } = ReactNative.NativeModules;

const App = () => {
  const [shouldShowA, setShouldShowA] = useState(false);
  const [shouldShowB, setShouldShowB] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.bigtitle}>NetAloSDK Demo React Native</Text>
        <View style={styles.marginTitle} />
        {!shouldShowA && !shouldShowB ? (
          <View>
            <Text>NetAloSDK Demo Application, Please select user:</Text>
            <View style={styles.marginButton} />
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => {
                NetAloSDK.setUser(
                  "281474976981354",
                  "9c98a74053f60334758b9dd82d5e8dbe77b5d2b6",
                  "a6hIg_MRfWKSPeAXkkxAjA6coypt1y6j1KtJAkbd9k_E2w46wZuU4mbhNvA4Uzdl",
                  "XX",
                  "+84969143732"
                );
                setShouldShowB(!shouldShowB);
              }}
            >
              <Text style={styles.title}>Set User A</Text>
            </TouchableOpacity>

            <View style={styles.margin} />
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => {
                NetAloSDK.setUser(
                  "281474977755104",
                  "28eccfda4d9c9cd78d2b775fce4464cb2a24a4ec",
                  "a6hIg_MRfWKSPeAXkkxAjA6coypt1y6j1KtJAkbd9k_E2w46wZuU4mbhNvA4Uzdl",
                  "XX",
                  "+84969143732"
                );
                setShouldShowA(!shouldShowA);
              }}
            >
              <Text style={styles.title}>Set User B</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        <View style={styles.margin} />

        {shouldShowA || shouldShowB ? (
          <View>
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => NetAloSDK.showListConversations()}
            >
              <Text style={styles.title}>Show List Conversations</Text>
            </TouchableOpacity>
            <View style={styles.margin} />
          </View>
        ) : null}

        {shouldShowA ? (
          <TouchableOpacity
            style={[styles.button]}
            onPress={() =>
              NetAloSDK.openChatWithUser(
                "281474976981354",
                "9c98a74053f60334758b9dd82d5e8dbe77b5d2b6"
              )
            }
          >
            <Text style={styles.title}>Open Chat With User</Text>
          </TouchableOpacity>
        ) : null}

        {shouldShowB ? (
          <TouchableOpacity
            style={[styles.button]}
            onPress={() =>
              NetAloSDK.openChatWithUser(
                "281474977755104",
                "28eccfda4d9c9cd78d2b775fce4464cb2a24a4ec"
              )
            }
          >
            <Text style={styles.title}>Open Chat With User</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    padding: 10,
    margin: 18,
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ff9900",
    backgroundColor: "rgba(0,0,0,0)",
  },
  button: {
    fontSize: 22,
    height: 50,
    backgroundColor: "#ff9900",
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    color: "#fff",
  },
  bigtitle: {
    fontSize: 30,
    color: "#ff9900",
    textAlign: "center",
  },
  margin: {
    height: 20,
  },
  marginTitle: {
    height: 100,
  },
  marginButton: {
    height: 10,
  },
});

export default App;
