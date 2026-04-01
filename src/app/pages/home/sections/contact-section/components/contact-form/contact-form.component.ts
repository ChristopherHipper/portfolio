import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { SecondaryButtonComponent } from "../../../../../../shared/button/secondary-button/secondary-button.component";
import { ScrollAnimationDirective } from '../../../../../../shared/directives/scroll-animation.directive';
import { ScrollIndicatorComponent } from "../../../../../../shared/scroll-indicator/scroll-indicator.component";
import { HttpClient } from '@angular/common/http';
import {TranslatePipe} from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, SecondaryButtonComponent, ScrollAnimationDirective, ScrollIndicatorComponent, TranslatePipe, RouterLink],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  formbuilder = inject(FormBuilder);
  http = inject(HttpClient);
  checkbox = signal(false);
  showSuccessMessage = signal(false);

  contactForm = this.formbuilder.group({
    name: ['', [Validators.required, Validators.minLength(1)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(1)]],
    checkbox: ['', [Validators.requiredTrue]]
  });

  formSubmit() {
    if (this.contactForm.valid) {
      this.showSuccessMessage.set(false);
      this.http.post('https://christopher-hipper.de/sendMail.php', this.contactForm.value)
        .subscribe({
          next: (response) => {
            this.contactForm.reset();
            this.checkbox.set(false);
            this.showSuccessMessage.set(true);
            setTimeout(()=>{this.showSuccessMessage.set(false);},2000);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    };
  };

  get invalidName() {
    return !this.contactForm.get('name')?.valid && this.contactForm.get('name')?.touched;
  };

  get invalidEmail() {
    return !this.contactForm.get('email')?.valid && this.contactForm.get('email')?.touched;
  };

  get invalidMessage() {
    return !this.contactForm.get('message')?.valid && this.contactForm.get('message')?.touched;
  };

  toggleCheckbox(){
    this.checkbox.set(!this.checkbox());
  };

  checkboxImageSrc() {
    if (this.checkbox()) {
      return `assets/img/checkbox/checkbox-checked.png`
    } else {
      return `assets/img/checkbox/checkbox.png`
    };
  };
}
