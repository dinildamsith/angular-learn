import {Injectable} from '@angular/core';

export class UserService {
    userLogs(message: string) {
      console.log("Logger -----------------------", message)
    }
}




@Injectable({
  providedIn: 'root'
})
export class Test {
    test (msg: string) {
      console.log(msg)
    }
}
