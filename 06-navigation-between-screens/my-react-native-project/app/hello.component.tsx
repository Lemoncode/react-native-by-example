import * as React from "react";
import { Input, Button, Avatar } from "react-native-elements";
import { StyleSheet, View } from "react-native";

export const HelloComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Avatar
        size="xlarge"
        rounded
        source={{
          uri: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        }}
      />
      <Input label="Email" leftIcon={{ type: "material", name: "email" }} />
      <Button title="Send" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  }
});
