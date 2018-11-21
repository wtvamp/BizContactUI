import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-header',
  providers: [LoginService],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public loggedIn = false;
  constructor(
    private _service:LoginService){}

  ngOnInit() {
    this.loggedIn = this._service.checkCredentials();
  }

  logout() {
    this._service.logout();
  }
}
