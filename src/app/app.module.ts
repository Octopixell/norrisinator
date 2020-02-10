import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeService } from './shared/joke.service';
import { HttpClientModule } from '@angular/common/http';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeComponent } from './joke/joke.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    JokeListComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
