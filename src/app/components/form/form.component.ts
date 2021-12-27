import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

import { BeerAPiService } from 'src/app/services/beer-api.service';
import { Beer, CBeer } from 'src/app/beer';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  beers: Beer[] = [];
  beer!: Beer;
  beerForm!: FormGroup;

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
      favBeers: this.fb.array([this.fb.control('')]),
    });
  }

  get favBeers(): FormArray {
    return this.beerForm.get('favBeers') as FormArray;
  }

  onChangeBeer($event: Event): void {
    console.log($event);
    const e = $event.target as HTMLInputElement;

    const id = e.value;
    const isChecked = e.checked;
    console.log(this.favBeers.controls.values);
  }

  onSubmit(): void {
    console.log(this.beerForm.value);
  }
}
