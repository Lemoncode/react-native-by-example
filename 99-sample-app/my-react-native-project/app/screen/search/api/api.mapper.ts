import { MemberAM } from "./api.model";
import { Member } from "../search-screen.model";

export const mapMembersToVM = (members: MemberAM[]) =>
  members.map(mapMemberToVM);

const mapMemberToVM = (member: MemberAM): Member => ({
  login: member.login,
  id: member.id,
  avatar_url: member.avatar_url,
  html_url: member.html_url,
  url: member.url
});
