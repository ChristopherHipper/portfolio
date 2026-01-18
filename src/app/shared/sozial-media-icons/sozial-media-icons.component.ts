import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sozial-media-icons',
  standalone: true,
  imports: [],
  templateUrl: './sozial-media-icons.component.html',
  styleUrl: './sozial-media-icons.component.scss'
})
export class SozialMediaIconsComponent {
  @Input() iconImg: string = '';

  getHref() {
    let iconName = this.iconImg.split("-")[0];    
    if (iconName === 'git') {
      return 'https://github.com/ChristopherHipper';
    } else if (iconName === 'mail') {
      return 'https://workspace.google.com/intl/de/products/gmail/';
    } else {
      return 'https://www.linkedin.com/in/christopher-hipper-014293253/';
    };
  };
};
