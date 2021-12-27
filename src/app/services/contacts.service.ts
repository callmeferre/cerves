import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';

import { Contact } from '../contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private apiUrl = 'http://localhost:3000/contacts';

  constructor(private httpClient: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(this.apiUrl);
  }

  deleteTask(contact: Contact): Observable<Contact> {
    const url = `${this.apiUrl}/${contact.id}`;
    return this.httpClient.delete<Contact>(url);
  }
}
