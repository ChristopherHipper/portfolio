import { Component, input, Input } from '@angular/core';
import { RouterLink } from "@angular/router";
import {TranslatePipe} from '@ngx-translate/core';

@Component({
    selector: 'app-logo',
    standalone: true,
    imports: [RouterLink, TranslatePipe],
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
