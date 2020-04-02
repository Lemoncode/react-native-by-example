import * as React from "react";
import { Text } from "react-native";

interface Props {
  name: string;
}

export const HelloComponent: React.FC<Props> = ({ name }) => {
  return <Text>Hello {name}!</Text>;
};
