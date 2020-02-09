import { Component, OnDestroy, OnInit } from '@angular/core';
import { JokeService } from './shared/joke.service';
import { Joke } from './interfaces/joke';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [JokeService]
})
export class AppComponent implements OnInit, OnDestroy {
  jokes: Joke[] = [];
  jokeSub: Subscription;

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.jokeSub = this.jokeService.getRandomJokes().subscribe((response) => {
      if (response.type === 'success') {
        this.jokes = response.value;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.jokeSub) { this.jokeSub.unsubscribe(); }
  }
}
