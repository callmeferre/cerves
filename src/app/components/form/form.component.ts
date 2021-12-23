import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  // beerForm: FormGroup;

  constructor(private beerService: BeerAPiService) {}

  ngOnInit(): void {
    this.beerService.getBeers().subscribe(
      (cerves) =>
        cerves.forEach((beer, i) => {
          console.log(beer);
          this.beer = new CBeer(
            beer.id,
            beer.name,
            beer.image_url,
            beer.description
          );
          this.beers.push(this.beer);
          setTimeout(() => console.log(this.beers[i]), 1000);
        })
      // {
      //   this.beers = cerves;
      //   console.log(this.beers);
      // }
    );
  }
}
