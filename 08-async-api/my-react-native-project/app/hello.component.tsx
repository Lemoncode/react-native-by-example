import * as React from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { Character } from "./api/api.model";
import { getCharacters } from "./api/api";

export const HelloComponent: React.FC = () => {
  const [characters, setCharacters] = React.useState<Character[]>([]);

  React.useEffect(() => {
    getCharacters().then(setCharacters);
  }, []);

  return (
    <FlatList
      data={characters}
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
};
