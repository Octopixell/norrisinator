import { Joke } from './joke';

export interface JokeApiResponse {
  type: string;
  value: Joke[];
}
