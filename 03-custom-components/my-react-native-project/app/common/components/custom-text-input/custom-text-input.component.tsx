import * as React from "react";
import { TextInput, StyleSheet } from "react-native";

interface Props {
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
}

export const CustomTextInput: React.FC<Props> = props => {
  const { value, placeholder, onChangeText } = props;

  return (
    <TextInput
      style={styles.textInput}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
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
