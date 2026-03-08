import { Component, input, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-logo',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './logo.component.html',
    styleUrl: './logo.component.scss'
})
export class LogoComponent {
  logoVariant = input()
  mainColor:string = '#262E34';
  secondColor:string = '#89BCD9';

  getLogo(){
    return `assets/img/icons/logo/${this.logoVariant()}.png`;
  };
};
