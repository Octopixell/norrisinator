import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokeListComponent } from './joke-list/joke-list.component';

const routes: Routes = [
  { path: '', component: JokeListComponent },
  { path: '**', component: JokeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
