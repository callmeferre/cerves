import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

import { BeerAPiService } from 'src/app/services/beer-api.service';
import { Beer, CBeer } from 'src/app/beer';
import { Contact } from 'src/app/contact';
import { ContactsService } from 'src/app/services/contacts.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  beers: Beer[] = [];
  beer!: Beer;
  beerForm!: FormGroup;
  selectedBeers: number = 0;
  @Output() onAddContact: EventEmitter<Contact> = new EventEmitter();

  constructor(private fb: FormBuilder, private beerService: BeerAPiService) {}

  ngOnInit(): void {
    this.beerService.getBeers().subscribe((cerves) =>
      cerves.forEach((beer, i) => {
        this.beer = new CBeer(
          beer.id,
          beer.name,
          beer.image_url,
          beer.description
        );
        this.beers.push(this.beer);
      })
    );
    this.initForm();
  }

  initForm(): void {
    this.beerForm = this.fb.group({
      name: '',
      tel: '',
      dob: '',
      gender: '',
      favBeers: this.fb.array([]),
    });
  }

  get favBeers(): FormArray {
    return this.beerForm.get('favBeers') as FormArray;
  }

  onChangeBeer($event: Event): void {
    const e = $event.target as HTMLInputElement;
    const id = e.value;
    let isChecked = e.checked;

    if (isChecked) {
      if (this.selectedBeers < 3) {
        this.selectedBeers++;
        this.favBeers.value.push(id);
      } else {
        this.beerForm.controls['favBeers'].disable();
      }
    } else {
      if (this.selectedBeers > 0) {
        this.selectedBeers--;
      }
      const i = this.favBeers.value.indexOf(id);
      this.favBeers.value.splice(i, 1);
    }
    console.log(this.favBeers);
  }

  public disableCheckbox(id: string | undefined): boolean {
    if (this.favBeers.value.length >= 3 && !this.favBeers.value.includes(id)) {
      return false;
    } else {
      return false;
    }
  }

  onSubmit(): void {
    const newContact: Contact = this.beerForm.value;
    this.onAddContact.emit(newContact);
    this.initForm();
  }
}
