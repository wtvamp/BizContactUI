import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { LoginService } from '../../services/login.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  providers: [LoginService, ContactService],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contacts = [];
  constructor(
    private router: Router,
    private loginService:LoginService, 
    private contactService:ContactService) { }

  ngOnInit() {
    this.loginService.checkCredentials();
    this.contactService.getContacts()
    .pipe(first())
    .subscribe(
        contacts => {
            this.contacts = contacts
        },
        error => {
            console.error(error);
        });
   // this.contacts = ;
  }
  
  logout() {
    this.loginService.logout();
  }
}
