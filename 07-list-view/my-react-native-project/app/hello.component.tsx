import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import { list } from "./mock";

export const HelloComponent: React.FC = () => (
  <FlatList
    data={list}
    renderItem={({ item }) => (
      <ListItem
        key={item.id}
        leftAvatar={{ source: { uri: item.image } }}
        title={item.name}
        subtitle={item.species}
        bottomDivider
        chevron
      />
    )}
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
