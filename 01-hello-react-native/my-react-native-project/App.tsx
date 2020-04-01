import React from "react";
import { StyleSheet, View } from "react-native";
import { HelloComponent } from "./app/hello.component";

export default function App() {
  return (
    <View style={styles.container}>
      <HelloComponent name="Lemoncoders" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
