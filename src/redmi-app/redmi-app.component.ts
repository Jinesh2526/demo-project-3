import { Component, OnInit } from '@angular/core';
import { RedmiDetailsComponent } from './redmi-details/redmi-details.component';
import { RredmiComponent } from './rredmi/rredmi.component';

@Component({
  standalone:true,
  selector: 'app-redmi-app',
  templateUrl: './redmi-app.component.html',
  styleUrls: ['./redmi-app.component.css'],
  imports:[RredmiComponent,RedmiDetailsComponent]
})
export class RedmiAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}