import { Routes } from '@angular/router';
import HomeComponent from './pages/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent }, // When you go to /home 👉 show HomeComponent.

  { path: '', redirectTo: '/home', pathMatch: 'full'} // When you go to / (empty path) 👉 redirect to /home.
];
