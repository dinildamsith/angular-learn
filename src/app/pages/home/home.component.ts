import {Component, OnInit} from '@angular/core';
import {Logger} from '@angular/compiler-cli';
import {Test} from '../../services/users/user.service';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.component.html',
})

export default class HomeComponent implements OnInit {


  // ----------  component create time this run
  constructor(private test : Test) {
    console.log("Home Component Created!....")
    this.test.test("Injectable Though Dependency Injection..")
  }


  // --------- ngOnInit runs after component loads
  ngOnInit() {
    console.log('ngOnInit called');
  }


}
