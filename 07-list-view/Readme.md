# Lists

## React Native Lists

- Flat list
- Section list

## Prepare App.tsx

_./App.tsx_

```diff
import React from "react";
import { StyleSheet, View } from "react-native";
import { HelloComponent } from "./app/hello.component";

export default function App() {
  return (
    <View style={styles.container}>
-     <HelloComponent name="Lemoncoders" />
+     <HelloComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
-   alignItems: "center",
-   justifyContent: "center"
  }
});

```

## Flat list

We use _HelloComponent_ to create a element list. The list elements are mocks from _./app/mock.ts_ file.

_./app/hello.component.tsx_

```typescript
import * as React from "react";
import { Text, FlatList, StyleSheet } from "react-native";
import { list } from "./mock";

export const HelloComponent: React.FC = () => (
  <FlatList
    data={list}
    keyExtractor={item => item.id.toString()}
    renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
  />
);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 25,
    fontSize: 20,
    height: 80
  }
});
```

## React Native Elements: ListItem

For this example, we install the react-native-elements library as described by _05 React Native Elements_:

```
npm install react-native-elements
```

Now you can use _ListItem_ component from React Native Elements:

_./app/hello.component.tsx_

```typescript
import * as React from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { list } from "./mock";

export const HelloComponent: React.FC = () => (
  <FlatList
    data={list}
    keyExtractor={item => item.id.toString()}
    renderItem={({ item }) => (
      <ListItem
        leftAvatar={{ source: { uri: item.image } }}
        title={item.name}
        subtitle={item.species}
        bottomDivider
        chevron
      />
    )}
  />
);
```
