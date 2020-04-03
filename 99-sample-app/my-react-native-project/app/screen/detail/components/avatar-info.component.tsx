import * as React from "react";
import { Avatar, Text } from "react-native-elements";
import { Member } from "../detail-screen.model";
import { StyleSheet } from "react-native";

interface Props {
  member: Member;
}

export const AvatarInfo: React.FC<Props> = ({ member }) => (
  <>
    <Avatar
      size="xlarge"
      rounded
      source={{
        uri: member.avatar_url
      }}
    />
    <Text style={styles.name}>{member.name ? member.name : "Unkown name"}</Text>
  </>
);

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    margin: 3
  }
});
