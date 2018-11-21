import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service'
 
@Component({
    selector: 'login-form',
    providers: [LoginService],
    templateUrl: './secured.component.html'
})
 
export class PrivateComponent implements OnInit {
 
    constructor(
        private _service:LoginService){}
 
    ngOnInit(){
        this._service.checkCredentials();
    }
 
    logout() {
        this._service.logout();
    }
}