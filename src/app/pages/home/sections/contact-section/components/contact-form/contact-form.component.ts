import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { SecondaryButtonComponent } from "../../../../../../shared/button/secondary-button/secondary-button.component";
import { ScrollAnimationDirective } from '../../../../../../shared/directives/scroll-animation.directive';
import { ScrollIndicatorComponent } from "../../../../../../shared/scroll-indicator/scroll-indicator.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, SecondaryButtonComponent, ScrollAnimationDirective, ScrollIndicatorComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  formbuilder = inject(FormBuilder)
  http = inject(HttpClient)

  contactForm = this.formbuilder.group({
    name: ['', [Validators.required, Validators.minLength(1)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(1)]],
    checkbox: ['', [Validators.requiredTrue]]
  })

    post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  formSubmit() {
    if (this.contactForm.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactForm.value))
        .subscribe({
          next: (response) => {

            this.contactForm.reset();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
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
