import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'nav-bar',
  standalone:true,
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css'],
  imports: [RouterLink]
})

export class NavComponent{}
