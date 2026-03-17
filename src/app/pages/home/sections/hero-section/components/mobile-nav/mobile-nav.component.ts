import { Component, output, input } from '@angular/core';
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

  toggleBurgerMenu(){
    const newCheckedState = !this.isChecked()
    console.log(newCheckedState);
    
    this.isCheckedChange.emit(newCheckedState)
  }


}
