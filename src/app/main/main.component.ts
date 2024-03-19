import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  items: any[] = [1, 2, 3, 'hello', 'mf'];
  counter: number = 0;
  onClick() {
    this.counter++;
    console.log('clicked', this.counter, 'times');
  }
  key: string = '';
  onKeyPress(event: any) {
    console.log(event.key);
    this.key = event.key;
  }
}
