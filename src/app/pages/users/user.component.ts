import { Component } from '@angular/core';
import {UserService} from '../../services/users/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  templateUrl: 'user.component.html',
  providers: [UserService]
})

export default class UserComponent {

  constructor(private userService : UserService) {
    this.userService.userLogs("User Component Initialized....")
  }

}
