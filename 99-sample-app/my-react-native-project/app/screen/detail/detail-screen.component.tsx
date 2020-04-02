import * as React from "react";
import { View, StyleSheet, Linking, Alert, ScrollView } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../app.entry";
import { StackNavigationProp } from "@react-navigation/stack";
import { getMemberDetail } from "./api/api";
import { Member } from "./detail-screen.model";
import { Avatar, Text, Button, ListItem } from "react-native-elements";
import { AvatarInfo } from "./components/avatar-info.component";
import { MemberInfo } from "./components/member-info.component";

type DetailScreenRouteProp = RouteProp<RootStackParamList, "Detail">;

type DetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Detail"
>;

type Props = {
  route: DetailScreenRouteProp;
  navigation: DetailScreenNavigationProp;
};

export const DetailScreen: React.FC<Props> = props => {
  const { route } = props;

  const [member, setMember] = React.useState<Member>(null);

  React.useEffect(() => {
    getMemberDetail(route.params.login).then(setMember);
  }, [route.params.login]);

  const handlePress = React.useCallback(async () => {
    if (member.html_url) {
      const supported = await Linking.canOpenURL(member.html_url);

      if (supported) {
        await Linking.openURL(member.html_url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${member.html_url}`);
      }
    }
  }, [member && member.html_url]);

  return !member ? (
    <></>
  ) : (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <AvatarInfo member={member} />
      </View>
      <ScrollView style={styles.infoContainer}>
        <MemberInfo member={member} />
      </ScrollView>
      <Button raised={false} title="Open in Github" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff"
  },
  avatarContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  infoContainer: {
    flex: 1
  }
});
