import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faMars } from '@fortawesome/free-solid-svg-icons';
import { faVenus } from '@fortawesome/free-solid-svg-icons';

import { ContactsService } from 'src/app/services/contacts.service';
import { Contact } from 'src/app/contact';
import { BeerAPiService } from 'src/app/services/beer-api.service';
import { Beer } from 'src/app/beer';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  person!: Contact;
  id!: number;
  beers: Beer[] = [];

  faMars = faMars;
  faVenus = faVenus;

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private beerService: BeerAPiService
  ) {}

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id') as string);
    this.contactsService.getContact(id).subscribe((contact) => {
      this.person = contact;
      console.log(contact);
      for (let beer of this.person.favBeers) {
        this.beerService.getBeer(beer).subscribe((beerO) => {
          console.log(beer);
          console.log(beerO);
          console.log(beerO[0].name);
          this.beers.push(beerO[0]);
          console.log(this.beers);
        });
      }
    });
  }
}
