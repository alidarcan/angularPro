import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  items: any[] = [1, 2, 3, 'hello', 'mf'];
  counter: number = 0;
  key: string = '';
  onClick() {
    this.counter++;
    console.log('clicked', this.counter, 'times');
  };
  onKeyPress(event: any) {
    console.log(event.key);
    this.key = event.key;
  }
  colorPicked = "green";
  fontSize = 20;

}
