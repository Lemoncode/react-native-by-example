export interface Character {
  id: number;
  name: string;
  species: string;
  image: string;
}

export interface CharactersResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Character[];
}
