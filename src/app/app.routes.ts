import {RouterModule, Routes} from '@angular/router';
import HomeComponent from './pages/home/home.component';
import UserComponent from './pages/users/user.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent }, // When you go to /home 👉 show HomeComponent.
  { path: 'users', component: UserComponent }, // When you go to /user👉 show UserComponent.
  { path: '', redirectTo: '/home', pathMatch: 'full'} // When you go to / (empty path) 👉 redirect to /home.
];

