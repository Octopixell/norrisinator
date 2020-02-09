import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { JokeApiResponse } from '../interfaces/joke-api-response';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  getRandomJokes(amount: number = 1): Observable<JokeApiResponse> {
    return this.http.get<JokeApiResponse>(`${environment.jokeApiUrl}/random/${amount}`);
  }

}
