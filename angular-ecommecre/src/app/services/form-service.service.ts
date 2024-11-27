import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Country } from '../comman/country';
import { State } from '../comman/state';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService {

  private baseUrl = environment.apiUrl + '/';

  constructor(private httpClient: HttpClient) {}

  getCreditCardMonths(startMonth: number): Observable<number[]> {
    let data: number[] = [];

    for (let theMonth = startMonth; theMonth <= 12; theMonth++) {
      data.push(theMonth);
    }

    return of(data);
  }

  getCreditCardYears(): Observable<number[]> {
    let data: number[] = [];

    const startYear: number = new Date().getFullYear();
    const endYear: number = startYear + 10;

    for (let theYear = startYear; theYear <= endYear; theYear++) {
      data.push(theYear);
    }

    return of(data);
  }

  getCountries(): Observable<Country[]> {
    return this.httpClient.get<GetCountriesResponse>(this.baseUrl + 'countries').pipe(
      map((response) => response._embedded.country)
    );
  }

  getStates(theCountryCode: string): Observable<State[]> {
    const searchStatesUrl = `${this.baseUrl}states/search/findByCountryCode?code=${theCountryCode}`;
    return this.httpClient.get<GetStatesResponse>(searchStatesUrl).pipe(
      map((response) => response._embedded.state)
    );
  }
}

interface GetCountriesResponse {
  _embedded: {
    country: Country[];
  };
}

interface GetStatesResponse {
  _embedded: {
    state: State[];
  };
}