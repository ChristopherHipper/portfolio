import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../pages/home/sections/hero-section/hero-section.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { HomeComponent } from "../../pages/home/home.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-main-page-layout',
  standalone: true,
  imports: [HeroSectionComponent, HeaderComponent, HomeComponent, FooterComponent],
  templateUrl: './main-page-layout.component.html',
  styleUrl: './main-page-layout.component.scss'
})
export class MainPageLayoutComponent {

}
