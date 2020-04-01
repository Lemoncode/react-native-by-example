import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemeProvider, Theme } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScreenA } from "./app/screens/screen-a/screen-a.component";
import { ScreenB } from "./app/screens/screen-b/screen-b.component";

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

export type RootStackParamList = {
  ScreenA: { text: string };
  ScreenB: { message: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="ScreenA"
              component={ScreenA}
              options={{ title: "Screen A" }}
              initialParams={{ text: "Initial text from App.tsx" }}
            />
            <Stack.Screen
              name="ScreenB"
              component={ScreenB}
              options={{ title: "Screen B" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
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
