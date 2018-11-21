import { Component, ElementRef } from '@angular/core';
import { LoginService, User } from '../../services/login.service';

@Component({
  selector: 'login-form',
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public user = new User('','');
  public errorMsg = '';

    constructor(private _service:LoginService) {}
 
    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }
  
}
