import * as React from "react";
import { Text, Button } from "react-native-elements";
import { RootStackParamList } from "../../../App";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type ScreenARouteProp = RouteProp<RootStackParamList, "ScreenA">;

type ScreenANavigationProp = StackNavigationProp<RootStackParamList, "ScreenA">;

type Props = {
  route: ScreenARouteProp;
  navigation: ScreenANavigationProp;
};

export const ScreenA: React.FC<Props> = ({ navigation, route }) => {
  const handlePress = () => {
    navigation.navigate("ScreenB", { message: "Hello from Screen A" });
  };

  return (
    <>
      <Text>I am Screen A - Text: {route.params.text}</Text>
      <Button title="Go to screen B" onPress={handlePress} />
    </>
  );
};
