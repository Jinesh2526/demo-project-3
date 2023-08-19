import { Component, Input, OnInit } from '@angular/core';
import { RedmiHalfDetails } from '../redmi-half-details';

@Component({
  standalone:true,
  selector: 'app-redmi-details',
  templateUrl: './redmi-details.component.html',
  styleUrls: ['./redmi-details.component.css']
})
export class RedmiDetailsComponent implements OnInit {
@Input()MI!:RedmiHalfDetails;
  constructor() { }

  ngOnInit() {
  }

}