import { Injectable } from '@angular/core';

export class Contact {
  constructor(
    public firstName: string,
    public lastName: string,
    public address: string
  ) {}
}

var contacts = [
  new Contact('Warren','Thompson','2015 Marten Ave SW Albany, OR 97321'),
  new Contact('Amber','Shearer','2015 Marten Ave SW Albany, OR 97321'),
  new Contact('Gabe','Shearer','2015 Marten Ave SW Albany, OR 97321'),
  new Contact('Julian','Thompson','2015 Marten Ave SW Albany, OR 97321')
]

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  addContact(contact) {
    contacts.push(contact);
  }

  getContacts() {
    return contacts;
  }
}
