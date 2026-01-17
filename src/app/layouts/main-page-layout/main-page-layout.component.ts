import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../pages/home/sections/hero-section/hero-section.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-page-layout',
  standalone: true,
  imports: [HeroSectionComponent, HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './main-page-layout.component.html',
  styleUrl: './main-page-layout.component.scss'
})
export class MainPageLayoutComponent {

}
