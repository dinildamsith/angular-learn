import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavComponent} from './components/navBar/nav.component';

@Component({
   selector: 'app-root',
   standalone: true,
   templateUrl: './app.component.html',
   imports: [RouterOutlet, NavComponent],
})
export class AppComponent {
  title = 'angular-learn';
}
