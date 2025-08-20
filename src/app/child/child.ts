import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone:true,
  imports: [CommonModule ],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
  @Input() message: string = "Hello";

}
