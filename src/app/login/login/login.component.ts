import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService, User } from '../../services/login.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'login-form',
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    public user = new User('','');
    public errorMsg = '';

    constructor(   
        private router: Router,
        private _service:LoginService) {}
 
    login() {
        this._service.login(this.user)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['home']);
                },
                error => {
                    this.errorMsg = error.message + ".  Please check console for more information.";
                    console.error(error);
                });
    }
  
}
