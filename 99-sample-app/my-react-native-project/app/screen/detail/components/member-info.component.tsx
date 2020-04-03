import * as React from "react";
import { Member } from "../detail-screen.model";
import { ListItem, Text, Divider } from "react-native-elements";

interface Props {
  member: Member;
}

export const MemberInfo: React.FC<Props> = ({ member }) => (
  <>
    {member.email && (
      <ListItem
        leftAvatar={{ icon: { name: "email", type: "material" } }}
        title={member.email}
        subtitle="Email"
        bottomDivider
      />
    )}
    {member.company && (
      <ListItem
        title={member.company}
        leftAvatar={{ icon: { name: "business-center", type: "material" } }}
        subtitle="Company"
        bottomDivider
      />
    )}
    {member.location && (
      <ListItem
        title={member.location}
        leftAvatar={{ icon: { name: "location-on", type: "material" } }}
        subtitle="Location"
        bottomDivider
      />
    )}
    {member.public_repos && (
      <ListItem
        title={member.public_repos.toString()}
        leftAvatar={{ icon: { name: "code", type: "material" } }}
        subtitle="Public repos"
        bottomDivider
      />
    )}
  </>
);
