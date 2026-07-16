import { Component, input, signal } from '@angular/core';

@Component({
    selector: 'app-sozial-media-icons',
    standalone: true,
    imports: [],
    templateUrl: './sozial-media-icons.component.html',
    styleUrl: './sozial-media-icons.component.scss'
})
export class SozialMediaIconsComponent {
  iconImg = input('')
  arialabel:string = "";

  getHref() {
    let iconName = this.iconImg().split("-")[0];    
    if (iconName === 'git') {
      this.arialabel = "Open Christopher Hipper's GitHub Profil";
      return 'https://github.com/ChristopherHipper';
    } else if (iconName === 'mail') {
      this.arialabel = "Open Mail to Christopher Hipper";
      return 'mailto:mail@christopher-hipper.de';
    } else {
      this.arialabel = "Open Christopher Hipper's LinkedIn Profil";
      return 'https://www.linkedin.com/in/christopher-hipper-014293253/';
    };
  };
};
