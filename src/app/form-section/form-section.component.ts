import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-section',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './form-section.component.html',
  styleUrl: './form-section.component.css',
})
export class FormSectionComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]]
    })
  }
  submitForm(){
    console.log("Form Submitted");
    
  }
  value:string = "";
  onEnter(item:string){
    this.value = item;
  }
}
