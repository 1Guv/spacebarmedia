import { Component, OnInit } from '@angular/core';
import { ClaimClass } from '../_models/claims';
import { ClaimService } from '../_services/claim.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss']
})
export class ClaimComponent implements OnInit {

  claim: ClaimClass;

  constructor(private claimService: ClaimService) {}

  ngOnInit() {
    this.claimService.getClaims()
      .subscribe((claim: ClaimClass) => {
        console.log('claim', claim);
        this.claim = claim;
      })
  }

}
