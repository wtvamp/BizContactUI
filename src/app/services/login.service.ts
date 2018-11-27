import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}
 
@Injectable()
export class LoginService {
 
  constructor(
    private _router: Router,
    private http: HttpClient){}
 
  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }
 
  login(user : User) {
    //todo: devopsamafy this
    return this.http.post<User>('https://localhost:5001/api/Auth/login', {
      userName: user.email,
      password: user.password
    })
    .pipe(map(user => {
      // login successful if there's a jwt token in the response
      if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("user", JSON.stringify(user));
          return true;
      } else {
        return false;
      }
    })); 
  }

  checkCredentials(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['login']);
        return false;
    }
    else {
      return true;
    }
  } 
}