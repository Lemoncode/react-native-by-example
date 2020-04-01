import * as React from "react";
import { Text, StyleSheet } from "react-native";

interface Props {
  name: string;
}

export const HelloComponent: React.FC<Props> = ({ name }) => {
  return <Text style={styles.title}>Hello {name}!</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
    backgroundColor: "#bebebe",
    padding: 10,
    borderRadius: 8
  }
});
