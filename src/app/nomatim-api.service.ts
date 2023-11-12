import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NomatimApiService {

  constructor(private http: HttpClient) {}
  getDataNomatim(location_name:string):Observable<any>{
    const url="";
    try{
    return this.http.get(url);
    }catch(error){
      console.error(error);
      throw error;
    }
  }
}
