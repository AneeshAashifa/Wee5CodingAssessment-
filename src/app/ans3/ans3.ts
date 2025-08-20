import { Component } from '@angular/core';

@Component({
  selector: 'app-ans3',
  imports: [],
  templateUrl: './ans3.html',
  styleUrl: './ans3.css'
})
export class Ans3 {
    name: string = '';
    age: number = 15;
    getMsg() {
      if (this.age < 13) {
        return `Hello ${this.name}, you are child`;
    } 
      else if (this.age >= 13 && this.age <= 19) {
        return `Hello ${this.name}, you are teenager`;
    } 
      else {
        return `Hello ${this.name}, you are an adult`;
    }
  }
}
