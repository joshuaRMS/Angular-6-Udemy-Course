import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number [] = [];
  evenNumbers: number[] = [];

  addComponent(firedNumber: number) {
    firedNumber % 2 == 0 ? this.evenNumbers.push(firedNumber) : this.oddNumbers.push(firedNumber);
  }

}
