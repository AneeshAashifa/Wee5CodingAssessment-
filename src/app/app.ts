import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ans1 } from './ans1/ans1';
import { Ans2 } from './ans2/ans2';
import { Ans3 } from './ans3/ans3';
import { Ans4 } from './ans4/ans4';
import { Ans5 } from './ans5/ans5';
import { Ans6 } from './ans6/ans6';
import { Ans7 } from './ans7/ans7';
import { Parent } from './parent/parent';
import { Child } from './child/child';
@Component({
  selector: 'app-root',
  imports: [FormsModule, Ans1, Ans2, Ans3, Ans4,Ans5,Ans6,Ans7, Parent,Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('assign-app');
}