import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { redmiinfo } from '../redmi-full-details';
import { RedmiHalfDetails } from '../redmi-half-details';
import { RedmiInsideBoxComponent } from './redmi-inside-box/redmi-inside-box.component';

@Component({
  standalone:true,
  selector: 'app-rredmi',
  templateUrl: './rredmi.component.html',
  styleUrls: ['./rredmi.component.css'],
  imports:[RedmiInsideBoxComponent,CommonModule]
})
export class RredmiComponent implements OnInit {
rredmi: RedmiHalfDetails[]=[];
@Output()redmiSelected=new EventEmitter<RedmiHalfDetails>();
  constructor() { }

  ngOnInit() {
    this.rredmi=redmiinfo;
  }
  selected(Hello:RedmiHalfDetails){
    console.log(Hello);
    this.redmiSelected.emit(Hello)
  }

}