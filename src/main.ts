import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>


    <h4>Ex</h4>
    <div *ngIf="checkIndication(item.mm)">

  <p>{{ item.mm }}</p>
</div>
  `,
})
export class App {
  name = 'Angular';
  item = { mm: 'mm' };

  indication = 'dd, 1, 2';

  checkIndication(value: string): boolean {
    const indicationArray = this.indication.split(',').map((val) => val.trim());
    return indicationArray.includes(value);
  }
}

bootstrapApplication(App);
