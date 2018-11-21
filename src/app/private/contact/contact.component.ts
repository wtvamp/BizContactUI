import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../services/contact.service';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-contact',
  providers: [LoginService],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private _service:LoginService, 
    private _service2:ContactService) { }

  ngOnInit() {
    this._service.checkCredentials();
  }
  
  logout() {
    this._service.logout();
  }
}
