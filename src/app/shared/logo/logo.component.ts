import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  @Input() logoVariant: 'nav' | 'hero' = 'hero'
  mainColor:string = '#262E34';
  secondColor:string = '#89BCD9';

  getLogo(){
    return `assets/img/icons/logo/${this.logoVariant}.png`;
  };
};
