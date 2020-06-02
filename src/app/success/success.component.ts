import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  public spins: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.spins = this.route.snapshot.params.amount;
  }

}
