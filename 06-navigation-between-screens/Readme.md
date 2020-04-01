# Navigation between screens

> The community solution to navigation is a standalone library that allows developers to set up the screens of an app with a few lines of code.

> More info: https://reactnative.dev/docs/navigation

## Installation and setup

First, you need to install them in your project:

```
npm install @react-navigation/native @react-navigation/stack
```

Next, install the required peer dependencies for an Expo managed project:

```
expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

To finalize installation of react-native-gesture-handler, add the following at the top (make sure it's at the top and there's nothing else before it) of your entry file (in our case _./App.tsx_):

```
import 'react-native-gesture-handler';
```

## Usage

Now you can create an app with a screen-a and screen-b. A screen has two props: router and navigation. You can type checking with Typescript, for example:

_./app/screens/screen-a/screen-a.component.tsx_

```typescript
import * as React from "react";
import { Text, Button } from "react-native-elements";
import { RootStackParamList } from "../../../App";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type ScreenARouteProp = RouteProp<RootStackParamList, "ScreenA">;

type ScreenANavigationProp = StackNavigationProp<RootStackParamList, "ScreenA">;

type Props = {
  route: ScreenARouteProp;
  navigation: ScreenANavigationProp;
};

export const ScreenA: React.FC<Props> = ({ navigation, route }) => {
  const handlePress = () => {
    navigation.navigate("ScreenB", { message: "Hello from Screen A" });
  };

  return (
    <>
      <Text>I am Screen A - Text: {route.params.text}</Text>
      <Button title="Go to screen B" onPress={handlePress} />
    </>
  );
};
```

_./app/screens/screen-b/screen-b.component.tsx_

```typescript
import * as React from "react";
import { Text, Button } from "react-native-elements";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";
import { StackNavigationProp } from "@react-navigation/stack";

type ScreenARouteProp = RouteProp<RootStackParamList, "ScreenB">;

type ScreenANavigationProp = StackNavigationProp<RootStackParamList, "ScreenB">;

type Props = {
  route: ScreenARouteProp;
  navigation: ScreenANavigationProp;
};

export const ScreenB: React.FC<Props> = ({ route }) => {
  return (
    <>
      <Text>I am Screen B - Message: {route.params.message}</Text>
    </>
  );
};
```

And use this screens on _App.tsx_:

```diff
+ import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View } from "react-native";
- import { HelloComponent } from "./app/hello.component";
import { ThemeProvider, Theme } from "react-native-elements";
+ import { NavigationContainer } from "@react-navigation/native";
+ import { createStackNavigator } from "@react-navigation/stack";
+ import { ScreenA } from "./app/screens/screen-a/screen-a.component";
+ import { ScreenB } from "./app/screens/screen-b/screen-b.component";

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

+ export type RootStackParamList = {
+   ScreenA: { text: string };
+   ScreenB: { message: string };
+ };

+ const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
-       <HelloComponent />
+       <NavigationContainer>
+         <Stack.Navigator>
+           <Stack.Screen
+             name="ScreenA"
+             component={ScreenA}
+             options={{ title: "Screen A" }}
+             initialParams={{ text: "Initial text from App.tsx" }}
+           />
+           <Stack.Screen
+             name="ScreenB"
+             component={ScreenB}
+             options={{ title: "Screen B" }}
+           />
+         </Stack.Navigator>
+       </NavigationContainer>
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
```
