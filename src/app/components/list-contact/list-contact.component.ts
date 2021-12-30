import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faBeer } from '@fortawesome/free-solid-svg-icons';

import { Contact } from 'src/app/contact';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss'],
})
export class ListContactComponent implements OnInit {
  @Input() contact!: Contact;
  faBeer = faBeer;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSelectUser(id: number | undefined) {
    this.router.navigate(['', id]);
  }
}
