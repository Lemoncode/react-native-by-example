import { MemberAM } from "./api.model";
import { Member } from "../detail-screen.model";

export const mapMemberToVM = (member: MemberAM): Member => ({
  login: member.login,
  id: member.id,
  avatar_url: member.avatar_url,
  html_url: member.html_url,
  company: member.company,
  email: member.email,
  followers: member.followers,
  following: member.following,
  location: member.location,
  name: member.name,
  public_repos: member.public_repos
});
