import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})


export class IdentificationComponent {

  error: string = "";
  identificationForm!: FormGroup;

  constructor (private formBuilder:FormBuilder, private router: Router) {}

  ngOnInit() {
    this.identificationForm = this.formBuilder.group({
      identification: ['', [Validators.required, Validators.pattern(/^(1[0-4]|[1-9])$/)]]
      // identification: ['', [Validators.required, Validators.pattern(/^(1[0-4]|[1-9])$/)]]
    })
  }

  get identification() {
    return this.identificationForm.get('identification');
  }


  onSubmit() {
    
    console.log(this.identificationForm);
      const tabs = [1, 2, 3, 4, 5];
      const value = +this.identificationForm.value.identification;
      
      for (let i = 1; i <= 14; i++) {
        const element = i;
        tabs.push(i);
        //console.log(element);
        if(element == value) {
          // console.log(value);
          localStorage.setItem(value.toString(), JSON.stringify([]))
        }
      }
  
  
      console.log(tabs, value, tabs.includes(value));
      
      if(!tabs.includes(value)) {

        this.error += "Le numero de table n'existe pas!"
      console.log(this.error);

      }

    }
  
  }
  
 



