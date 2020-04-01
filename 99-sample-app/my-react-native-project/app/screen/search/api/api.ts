import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import { mapMembersToVM } from "./api.mapper";

export const getOrganizationMembers = (organization: string) =>
  trackPromise(
    axios
      .get(`https://api.github.com/orgs/${organization}/members`)
      .then(r => r.data)
      .then(mapMembersToVM)
  );
