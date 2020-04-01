import * as React from "react";
import { ThemeProvider } from "react-native-elements";
import { theme } from "./theme";
import { Header } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { SearchScreen } from "./screen/search/search-screen.component";
import { DetailScreen } from "./screen/detail/detail-screen.component";
import { Loader } from "./common/loader/loader.component";

export type RootStackParamList = {
  Search: {};
  Detail: {
    login: string;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

export const AppEntry: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Loader />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "Search organization" }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: "Member detail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </ThemeProvider>
);
