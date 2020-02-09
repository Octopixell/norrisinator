import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { JokeApiResponse } from '../interfaces/joke-api-response';
import { Joke } from '../interfaces/joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private readonly xFavorites = new BehaviorSubject<Joke[]>([]);
  readonly $favorites = this.xFavorites.asObservable();

  constructor(private http: HttpClient) { }

  getRandomJokes(amount: number = 1): Observable<JokeApiResponse> {
    return this.http.get<JokeApiResponse>(`${environment.jokeApiUrl}/random/${amount}`);
  }

  get favorites(): Joke[] {
    return this.xFavorites.getValue();
  }

  set favorites(value: Joke[]) {
    this.xFavorites.next(value);
  }

  markJokeAsFavorite(joke: Joke): void {
    this.favorites = [...this.favorites].concat([joke]);
  }
}
