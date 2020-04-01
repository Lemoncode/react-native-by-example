import React from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerA}></View>
      <View style={styles.containerB}></View>
      <View style={styles.containerC}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerA: {
    height: 100,
    width: 100,
    backgroundColor: "#546513"
  },
  containerB: {
    flex: 1,
    backgroundColor: "#846513"
  },
  containerC: {
    flex: 1,
    backgroundColor: "#a56487"
  }
});
