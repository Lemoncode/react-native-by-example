# React Native Elements

_Cross Platform React Native UI Toolkit_
Site: https://react-native-elements.github.io/react-native-elements/

> The aim of React Native Elements is to provide an all-in-one UI kit for creating apps in react native.

## Installation

We take as startup point the example _01 Hello ReactNative_.

```
npm install react-native-elements
```

## Theme

The components in this library have a single theme running through them. We can customize colours and other component props in one central place.

_./App.tsx_

```typescript
import React from "react";
import { StyleSheet, View } from "react-native";
import { HelloComponent } from "./app/hello.component";
+ import { ThemeProvider, Theme } from "react-native-elements";

+ const theme: Theme = {
+   Input: {
+     placeholder: "Type here...",
+     inputStyle: {
+       color: "blue"
+     }
+   },
+   colors: {
+     primary: "#e0c801"
+   }
+ };

export default function App() {
  return (
+   <ThemeProvider theme={theme}>
      <View style={styles.container}>
-       <HelloComponent name="Lemoncoders" />
+       <HelloComponent />
      </View>
+   </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
-   alignItems: "center",
    justifyContent: "center"
  }
});

```

> Order of styles: **Internal > Theme > External**

## Components

We can use components of React Native Elements components collection:
https://react-native-elements.github.io/react-native-elements/

For example, we can use the _Avatar, Input and Button_ components:

_./app/hello.component.tsx_

```typescript
import * as React from "react";
- import { Text } from "react-native";
+ import { Input, Button, Avatar } from "react-native-elements";
+ import { StyleSheet, View } from "react-native";

- interface Props {
-   name: string;
- }

- export const HelloComponent: React.FC<Props> = ({ name }) => {
-   return <Text>Hello {name}!</Text>;
- };

+ export const HelloComponent: React.FC = () => {
+   return (
+     <View style={styles.container}>
+       <Avatar
+         size="xlarge"
+         rounded
+         source={{
+           uri: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
+         }}
+       />
+       <Input label="Email" leftIcon={{ type: "material", name: "email" }} />
+       <Button title="Send" />
+     </View>
+   );
+ };

+ const styles = StyleSheet.create({
+   container: {
+     flex: 1,
+     display: "flex",
+     alignItems: "center",
+     justifyContent: "space-around"
+   }
+ });
```
