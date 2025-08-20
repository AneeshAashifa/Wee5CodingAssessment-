import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ans2',
  imports: [FormsModule],
  templateUrl: './ans2.html',
  styleUrl: './ans2.css'
})
export class Ans2 {
  name: string ="Bob";
  age: number =25;
}
