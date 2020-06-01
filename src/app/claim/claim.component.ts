import { Component, OnInit } from '@angular/core';
import { ClaimClass } from '../_models/claims';
import { ClaimService } from '../_services/claim.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss']
})
export class ClaimComponent implements OnInit {

  claim: ClaimClass;

  constructor(private claimService: ClaimService, private http: HttpClient) {
    this.claimService.getClaims()
    .subscribe((data: ClaimClass) => {
      console.log('data', data);
      this.claim = data;
    })
  }

  ngOnInit() {
  }

}
