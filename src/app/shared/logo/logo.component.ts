import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  @Input() logoVariant: string = '';
  mainColor:string = '#262E34';
  secondColor:string = '#89BCD9';
}
