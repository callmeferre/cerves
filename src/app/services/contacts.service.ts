import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';

import { Contact } from '../contact';

const httpOptions = {
  header: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private apiUrl = 'http://localhost:3000/contacts';

  constructor(private httpClient: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(this.apiUrl);
  }

  addContact(contact: Contact): Observable<Contact> {
    console.log(contact);
    return this.httpClient.post<Contact>(this.apiUrl, contact);
  }

  // deleteContact(contact: Contact): Observable<Contact> {
  //   const url = `${this.apiUrl}/${contact.id}`;
  //   return this.httpClient.delete<Contact>(url);
  // }
}
