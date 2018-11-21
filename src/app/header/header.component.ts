import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-header',
  providers: [LoginService],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _service:LoginService){}

  ngOnInit() {
  }
  logout() {
    this._service.logout();
  }
}
