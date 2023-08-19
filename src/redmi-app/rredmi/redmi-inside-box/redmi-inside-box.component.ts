import { Component, Input, OnInit } from '@angular/core';
import { RedmiHalfDetails } from '../../redmi-half-details';

@Component({
  standalone:true,
  selector: 'app-redmi-inside-box',
  templateUrl: './redmi-inside-box.component.html',
  styleUrls: ['./redmi-inside-box.component.css']
})
export class RedmiInsideBoxComponent implements OnInit {
@Input()   redmiHalfDetails!:RedmiHalfDetails;
  constructor() { }

  ngOnInit() {
  }

}