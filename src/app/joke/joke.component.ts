import { Component, Input, OnInit } from '@angular/core';
import { Joke } from '../interfaces/joke';
import { JokeService } from '../shared/joke.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
  @Input() joke: Joke;
  heartIcon = faHeart;
  text: string;

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    this.text = this.getText();
  }

  getText(): string {
    return this.joke.joke.replace(/&quot;/g, '"');
  }

  markAsFavorite(): void {
    this.jokeService.markJokeAsFavorite(this.joke);
  }
}
