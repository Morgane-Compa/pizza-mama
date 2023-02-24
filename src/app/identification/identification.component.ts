import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';


@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent {
  error: string = "";
  identificationForm!: FormGroup;
  selectedTableNumber: number | undefined; // Define a variable to hold the selected table number

  @Output() tableNumberSelected = new EventEmitter<number>(); // Declare an event emitter to communicate with the parent component

  constructor (
    public formBuilder: FormBuilder, 
    private router: Router, 
    private localStorageService: LocalStorageService,
  ) {}

  ngOnInit() {
    // Initialize the form group
    this.identificationForm = this.formBuilder.group({
      identification: ['', [Validators.required, Validators.pattern(/^(1[0-4]|[1-9])$/)]]
    })
  }

  get identification() {
    return this.identificationForm.get('identification');
  }

  onSubmit() {
    const tabs = [1, 2, 3, 4, 5];
    const value = +this.identificationForm.value.identification;
    this.selectedTableNumber = value; // Update the selectedTableNumber variable

    // Check if the selected table number is valid and store it in localStorage
    for (let i = 1; i <= 14; i++) {
      const element = i;
      tabs.push(i);
      if(element == value) {
        this.localStorageService.setItem(value.toString(), JSON.stringify([]));
        this.tableNumberSelected.emit(value); // Emit the selected table number to the parent component
      }
    }

    // If the selected table number is invalid, display an error message
    if(!tabs.includes(value)) {
      this.error += "Le numero de table n'existe pas!"
      console.log(this.error);
    }
  }
}
