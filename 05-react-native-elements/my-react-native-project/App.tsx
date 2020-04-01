import React from "react";
import { StyleSheet, View } from "react-native";
import { HelloComponent } from "./app/hello.component";
import { ThemeProvider, Theme } from "react-native-elements";

const theme: Theme = {
  Input: {
    placeholder: "Type here...",
    inputStyle: {
      color: "blue"
    }
  },
  colors: {
    primary: "#e0c801"
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <HelloComponent />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});
