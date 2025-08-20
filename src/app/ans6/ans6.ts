import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Empser } from '../empser';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-ans6',
  imports: [CommonModule,FormsModule],
  templateUrl: './ans6.html',
  styleUrl: './ans6.css'
})
export class Ans6 {
  code = '';
  name = '';
  gender = '';
  salary = 0;
  dob = '';

  constructor(private empService: Empser) {}

  addEmployee() {
    this.empService.addEmployee({
      code: this.code,
      name: this.name,
      gender: this.gender,
      annualSalary: this.salary,
      dateOfBirth: this.dob
    });
    alert('Employee Added!');
  }
}
