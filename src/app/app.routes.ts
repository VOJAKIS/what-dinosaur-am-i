import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { YouAreADinosaurComponent } from './you-are-a-dinosaur/you-are-a-dinosaur.component';
import { NotADinosaurComponent } from './not-a-dinosaur/not-a-dinosaur.component';

export const routes: Routes = [
  {
    path: `dinosaur/:age`,
    component: YouAreADinosaurComponent,
  },
  {
    path: `not-a-dinosaur`,
    component: NotADinosaurComponent,
  },
  {
    path: `**`,
    component: HomeComponent,
  },
];
