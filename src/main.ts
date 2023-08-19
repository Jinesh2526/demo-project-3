import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { RedmiAppComponent } from './redmi-app/redmi-app.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule,RedmiAppComponent],
  template: `
  <app-redmi-app></app-redmi-app>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
