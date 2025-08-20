import { Component } from '@angular/core';
import { Empser } from '../empser';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ans5',
  imports: [CommonModule],
  templateUrl: './ans5.html',
  styleUrl: './ans5.css'
})
export class Ans5 {
  employees: any[] = [];

  constructor(private empService: Empser) {
    this.employees = this.empService.getAllEmployees();
  }
}
