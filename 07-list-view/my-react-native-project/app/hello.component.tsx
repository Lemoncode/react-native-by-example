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
