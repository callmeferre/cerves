import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { Beer } from 'src/app/beer';

@Injectable({
  providedIn: 'root',
})
export class BeerAPiService {
  private apiUrl = 'https://api.punkapi.com/v2/beers?per_page=10';
  beer!: Beer;

  constructor(private httpClient: HttpClient) {}

  getBeers(): Observable<Beer[]> {
    return this.httpClient.get<Beer[]>(this.apiUrl);
  }

  getBeer(id: string): Observable<Beer[]> {
    return this.httpClient.get<Beer[]>(
      `https://api.punkapi.com/v2/beers/${id}`
    );
  }
}
