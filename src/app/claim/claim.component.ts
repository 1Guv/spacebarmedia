import { Component, OnInit } from '@angular/core';

export class ClaimClass {
  amount: number;
  prize: string;
  game: string;
  countdown: number;
}

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.scss']
})
export class ClaimComponent implements OnInit {

  claim: ClaimClass = {
    amount: 50,
    prize: 'Free Spins',
    game: 'Gemix',
    countdown: 25
  };

  constructor() { }

  ngOnInit() {
  }

}
