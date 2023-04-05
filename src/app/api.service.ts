import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getStarWarsData() {
    return this.httpClient.get('https://swapi.dev/api/starships/9/');
  }
}
