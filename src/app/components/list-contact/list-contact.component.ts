import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/contact';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss'],
})
export class ListContactComponent implements OnInit {
  @Input() contact!: Contact;

  constructor() {}

  ngOnInit(): void {}
}
