import {Component, OnInit} from '@angular/core';
import {Logger} from '@angular/compiler-cli';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.component.html',
})

export default class HomeComponent implements OnInit {


  // ----------  component create time this run
  constructor() {
    console.log("Home Component Created!....")
  }


  // --------- ngOnInit runs after component loads
  ngOnInit() {
    console.log('ngOnInit called');
  }


}
