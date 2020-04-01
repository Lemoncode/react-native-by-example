# Hello ReactNative

## Create _app_ folder

Create a new folder called _app_. We will create our app files into this folder.

## Create our first ReactNative component

Create a simple ReactNative component (let's create it within a new file called hello.component.tsx in app folder).

_./app/hello.component.tsx_

```typescript
import * as React from "react";
import { Text } from "react-native";

interface Props {
  name: string;
}

export const HelloComponent: React.FC<Props> = ({ name }) => {
  return <Text>Hello {name}!</Text>;
};
```

We have our first ReactNative component called HelloComponent. We can use it on App.tsx

_./App.tsx_

```diff
import React from "react";
- import { StyleSheet, Text, View } from "react-native";
+ import { StyleSheet, View } from "react-native";
+ import { HelloComponent } from "./app/hello.component";

export default function App() {
  return (
    <View style={styles.container}>
-     <Text>Open up App.tsx to start working on your app!</Text>
+     <HelloComponent name="Lemoncoders" />
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

```
