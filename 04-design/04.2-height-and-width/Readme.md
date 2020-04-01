# Height and Width

A component's height and width determine its size on the screen.

## Fixed Dimensions

The general way to set the dimensions of a component is by adding a fixed width and height to style. All dimensions in React Native are unitless, and represent density-independent pixels.

Setting dimensions this way is common for components that should always render at exactly the same size, regardless of screen dimensions.

## Flex Dimensions

Use flex in a component's style to have the component expand and shrink dynamically based on available space. Normally you will use flex: 1, which tells a component to fill all available space, shared evenly amongst other components with the same parent. The larger the flex given, the higher the ratio of space a component will take compared to its siblings.

> A component can only expand to fill available space if its parent has dimensions greater than 0. If a parent does not have either a fixed width and height or flex, the parent will have dimensions of 0 and the flex children will not be visible.

## Example

_./App.tsx_

```typescript
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
```
