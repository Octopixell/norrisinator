import { Component, Input, OnInit } from '@angular/core';
import { Joke } from '../interfaces/joke';
import { JokeService } from '../shared/joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
  @Input() joke: Joke;

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
  }

  markAsFavorite(): void {
    this.jokeService.markJokeAsFavorite(this.joke);
  }
}
