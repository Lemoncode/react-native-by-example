import * as React from "react";
import { Text, Button } from "react-native-elements";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";
import { StackNavigationProp } from "@react-navigation/stack";

type ScreenARouteProp = RouteProp<RootStackParamList, "ScreenB">;

type ScreenANavigationProp = StackNavigationProp<RootStackParamList, "ScreenB">;

type Props = {
  route: ScreenARouteProp;
  navigation: ScreenANavigationProp;
};

export const ScreenB: React.FC<Props> = ({ route }) => {
  return (
    <>
      <Text>I am Screen B - Message: {route.params.message}</Text>
    </>
  );
};
