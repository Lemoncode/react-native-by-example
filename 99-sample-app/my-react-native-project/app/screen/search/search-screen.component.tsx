import * as React from "react";
import { DebounceSearchBar } from "../../common/components/debounce-search-bar/debounce-search-bar.component";
import { Text, ListItem } from "react-native-elements";
import { getOrganizationMembers } from "./api/api";
import { Member } from "./search-screen.model";
import { FlatList, View, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../app.entry";
import { StackNavigationProp } from "@react-navigation/stack";

type SearchScreenRouteProp = RouteProp<RootStackParamList, "Search">;

type SearchScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Search"
>;

type Props = {
  route: SearchScreenRouteProp;
  navigation: SearchScreenNavigationProp;
};

export const SearchScreen: React.FC<Props> = props => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [members, setMembers] = React.useState<Member[]>([]);
  const { navigation } = props;

  React.useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      getOrganizationMembers(searchTerm)
        .then(setMembers)
        .catch(() => setMembers([]))
        .finally(() => setLoading(false));
    } else {
      setMembers([]);
    }
  }, [searchTerm]);

  const handleChangeText = (value: string) => setSearchTerm(value);

  return (
    <>
      <DebounceSearchBar
        placeholder="Type Here..."
        onChangeText={handleChangeText}
        value={searchTerm}
        showLoading={loading}
      />
      {members.length > 0 ? (
        <FlatList
          data={members}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              leftAvatar={{ source: { uri: item.avatar_url } }}
              title={item.login}
              subtitle={item.html_url}
              onPress={() =>
                navigation.navigate("Detail", { login: item.login })
              }
              bottomDivider
              chevron
            />
          )}
        />
      ) : (
        <View style={styles.noResults}>
          <Text>No results</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  noResults: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
