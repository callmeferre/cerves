import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.contactsService
      .getContacts()
      .subscribe((contacts) => (this.contacts = contacts));
  }
}
