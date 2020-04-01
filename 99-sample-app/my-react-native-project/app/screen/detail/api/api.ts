import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import { mapMemberToVM } from "./api.mapper";

export const getMemberDetail = (login: string) =>
  trackPromise(
    axios
      .get(`https://api.github.com/users/${login}`)
      .then(r => r.data)
      .then(mapMemberToVM)
  );
