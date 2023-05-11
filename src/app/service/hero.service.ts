import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  
  constructor(private httpClient:HttpClient) { }

  getHeros():Observable<any>{
    const heroUrl = 'localhost:8090/api/heros'
    return this.httpClient.get("heroUrl");
  }

}
