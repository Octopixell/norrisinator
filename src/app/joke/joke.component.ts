import { Component, Input, OnInit } from '@angular/core';
import { Joke } from '../interfaces/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
  @Input() joke: Joke;

  constructor() { }

  ngOnInit() {
  }
}
