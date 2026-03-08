import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { SecondaryButtonComponent } from "../../../../../../shared/button/secondary-button/secondary-button.component";

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, SecondaryButtonComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  formbuilder = inject(FormBuilder)

  contactForm = this.formbuilder.group({
    name: ['', [Validators.required, Validators.minLength(1)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(1)]],
    checkbox: ['', [Validators.requiredTrue]]
  })

  formSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.contactForm.reset();
    }
    
    
  }

  get invalidName(){
    return !this.contactForm.get('name')?.valid && this.contactForm.get('name')?.touched;
  }

  get invalidEmail(){
    return !this.contactForm.get('email')?.valid && this.contactForm.get('email')?.touched;
  }

  get invalidMessage(){
    return !this.contactForm.get('message')?.valid && this.contactForm.get('message')?.touched;
  }
}
