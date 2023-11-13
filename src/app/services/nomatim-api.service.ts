import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class NomatimApiService {

  getDataNomatim(location_name: string): Observable<any> {
    const url = "https://nominatim.openstreetmap.org/search?q=";
    try {
      
      return new Observable(observer => {
        axios.get(url + location_name + "&format=jsonv2").then(response => {

          observer.next(response.data);
          observer.complete();

        }).catch(error => {
            observer.error(error);
          });

      });
    } catch (error) {
      console.error(error);
      throw (error);
    }
  }
}
