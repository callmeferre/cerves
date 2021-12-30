import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ElementRef } from '@angular/core';

import { BeerAPiService } from 'src/app/services/beer-api.service';
import { Beer, CBeer } from 'src/app/beer';
import { Contact } from 'src/app/contact';

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

  constructor(
    private fb: FormBuilder,
    private beerService: BeerAPiService,
    private elementRef: ElementRef
  ) {}

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
    const checkBoxes = this.elementRef.nativeElement.querySelectorAll(
      'input.userForm__formCheck--box'
    );
    if (!isChecked) {
      this.selectedBeers--;
    }
    if (this.selectedBeers <= 2) {
      if (isChecked) {
        this.selectedBeers++;
        this.favBeers.value.push(id);
      } else {
        const i = this.favBeers.value.indexOf(id);
        this.favBeers.value.splice(i, 1);
      }
    }
    // Deshabilitar selección de más de 3
    if (this.selectedBeers == 3) {
      checkBoxes.forEach((box: any) => {
        if (!box.checked) {
          box.disabled = true;
        }
      });
    } else {
      checkBoxes.forEach((box: any) => {
        box.disabled = false;
      });
    }
    console.log(this.favBeers.value);
  }

  onSubmit(): void {
    const newContact: Contact = this.beerForm.value;
    this.onAddContact.emit(newContact);
    this.initForm();
    const checkBoxes = this.elementRef.nativeElement.querySelectorAll(
      'input.userForm__formCheck--box'
    );
    checkBoxes.forEach((box: any) => {
      box.checked = false;
      box.disabled = false;
      this.selectedBeers = 0;
    });
  }
}
