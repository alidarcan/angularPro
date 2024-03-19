import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';

@Component({
  selector: 'app-pipe-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  // default date options set up
  // providers: [
  //   {
  //     provide: DATE_PIPE_DEFAULT_OPTIONS,
  //     useValue: { dateFormat: "dd/MMMM/yyyy" }
  //   },
  // ],
  templateUrl: './pipe-section.component.html',
  styleUrl: './pipe-section.component.css',
})
export class PipeSectionComponent {
  value: string = 'hElLo, aNgulaR';
  currentDate = new Date();
  amount: number = 12345.67;
}
