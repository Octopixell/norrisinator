import { Component, OnDestroy, OnInit } from '@angular/core';
import { Joke } from '../interfaces/joke';
import { Subscription } from 'rxjs';
import { JokeService } from '../shared/joke.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit, OnDestroy {
  jokes: Joke[] = [];
  jokeSub: Subscription;

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.getJokes();
  }

  getJokes(): void {
    this.jokeSub = this.jokeService.getRandomJokes(10).subscribe((response) => {
      if (response.type === 'success') {
        this.jokes = response.value;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.jokeSub) { this.jokeSub.unsubscribe(); }
  }
}
