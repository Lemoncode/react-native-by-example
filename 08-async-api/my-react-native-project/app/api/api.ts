import axios from "axios";
import { CharactersResponse, Character } from "./api.model";

export const getCharacters = (): Promise<Character[]> =>
  axios
    .get<CharactersResponse>(`https://rickandmortyapi.com/api/character/`)
    .then(r => r.data.results);
