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
