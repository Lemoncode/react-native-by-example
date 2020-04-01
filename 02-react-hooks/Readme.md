# React Hooks

We can use React Hooks. We will modify HelloComponent to create an inner state with React useState hook.

_./app/hello.component.tsx_

```typescript
import * as React from "react";
import { Text, TextInput, StyleSheet } from "react-native";

export const HelloComponent: React.FC = () => {
  const [name, setName] = React.useState<string>("");

  const handleChange = (text: string) => setName(text);

  return (
    <>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={handleChange}
      />
      <Text>{name ? <>Hello {name}!</> : <>Enter your name</>}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#333",
    borderWidth: 1,
    width: "90%",
    padding: 5,
    borderRadius: 10
  }
});
```

We need modify App.tsx to delete _name_ props on HelloComponent:

_./App.tsx_

```diff
import React from "react";
import { StyleSheet, View } from "react-native";
import { HelloComponent } from "./app/hello.component";

export default function App() {
  return (
    <View style={styles.container}>
-       <HelloComponent name="Lemoncoders" />
+       <HelloComponent />
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

Then our app has an input text to set the internal state with the name
