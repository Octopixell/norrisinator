import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeService } from './shared/joke.service';
import { HttpClientModule } from '@angular/common/http';
import { JokesComponent } from './jokes/jokes.component';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
