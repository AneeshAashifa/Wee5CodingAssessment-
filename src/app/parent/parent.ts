import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child } from '../child/child';
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {
  parentMessage: string = "Hello from Parent Component!";

   
}
