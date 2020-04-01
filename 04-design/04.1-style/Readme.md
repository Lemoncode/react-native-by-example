# Style

We take as startup point the example _01 Hello ReactNative_.

With React Native, you style your application using JavaScript. All of the core components accept a prop named style. The style names and values usually match how CSS works on the web, except names are written using camel casing, e.g. backgroundColor rather than background-color.

The style prop can be a plain old JavaScript object. You can also pass an array of styles - the last style in the array has precedence, so you can use this to inherit styles.

As a component grows in complexity, it is often cleaner to use _StyleSheet.create_ to define several styles in one place.

_./app/hello.component.tsx_

```diff
import * as React from "react";
- import { Text } from "react-native";
+ import { Text, StyleSheet } from "react-native";

interface Props {
  name: string;
}

export const HelloComponent: React.FC<Props> = ({ name }) => {
-   return <Text>Hello {name}!</Text>;
+   return <Text style={styles.title}>Hello {name}!</Text>;
};

+ const styles = StyleSheet.create({
+   title: {
+     fontSize: 20,
+     fontWeight: "bold",
+     color: "blue",
+     backgroundColor: "#bebebe",
+     padding: 10,
+     borderRadius: 8
+   }
+ });
```
