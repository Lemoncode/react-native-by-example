import * as React from "react";
import { Text } from "react-native";
import { DebounceTextInput } from "./common/components/debounce-text-input/debounce-text-input.component";

export const HelloComponent: React.FC = () => {
  const [name, setName] = React.useState<string>("");

  const handleChange = (text: string) => setName(text);

  return (
    <>
      <DebounceTextInput value={name} onChangeText={handleChange} />
      <Text>{name ? <>Hello {name}!</> : <>Enter your name</>}</Text>
    </>
  );
};
