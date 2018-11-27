import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

export class Contact {
  constructor(
    public firstName: string,
    public lastName: string,
    public address: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  private httpOptions = {};

  getAuthToken() {
    if (JSON.parse(localStorage.getItem('user'))) {
      const auth_token = JSON.parse(localStorage.getItem('user')).auth_token;
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + auth_token
        })
      };
      return true;
    }
    else {
      console.error("No auth token detected");
      return false;
    }
  }
  addContact(contact: Contact) {
    if (this.getAuthToken()) {
      //todo: devopsamafy this
      return this.http.post<Contact>('https://localhost:5001/api/BizContacts', {
        bizContactId: 0,
        firstName: contact.firstName,
        lastName: contact.lastName,
        address: contact.address
      }, this.httpOptions)
      .pipe(map(contacts => {
        // login successful if there's a jwt token in the response
        if (contacts) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            return contacts
        } else {
          return false;
        }
      })); 
    }
  }

  getContacts() {
    if (this.getAuthToken()) {
      return this.http.get<Contact[]>('https://localhost:5001/api/BizContacts', this.httpOptions)
    }
  }
}
