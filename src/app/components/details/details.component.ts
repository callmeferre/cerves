import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactsService } from 'src/app/services/contacts.service';
import { Contact } from 'src/app/contact';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  person!: Contact;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService
  ) {}

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id') as string);
    this.contactsService.getContact(id).subscribe((contact) => {
      this.person = contact;
      console.log(contact);
    });
  }
}
