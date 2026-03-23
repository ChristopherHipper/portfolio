import { Component, output, input, ElementRef, ViewChild } from '@angular/core';
import { LogoComponent } from '../../../../../../shared/logo/logo.component';
import { ɵInternalFormsSharedModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mobile-nav',
  imports: [LogoComponent, ɵInternalFormsSharedModule, FormsModule],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss',
})
export class MobileNavComponent {
  isCheckedChange = output<boolean>();
  isChecked = input<boolean>();
  @ViewChild('burgerContainer', { read: ElementRef })
  burgerContainer!: ElementRef;

  toggleBurgerMenu(){
    const newCheckedState = !this.isChecked()
    this.isCheckedChange.emit(newCheckedState)
  }


}
