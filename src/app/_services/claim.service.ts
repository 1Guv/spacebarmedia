import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClaimClass } from '../_models/claims';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  url: string = 'assets/json/claims.json';

  constructor(private http: HttpClient) { 
  }

  getClaims(): Observable<ClaimClass> {
    return this.http.get<ClaimClass>(this.url);
  }

}
