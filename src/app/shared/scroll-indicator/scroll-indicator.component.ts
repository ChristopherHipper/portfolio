import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-scroll-indicator',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './scroll-indicator.component.html',
    styleUrl: './scroll-indicator.component.scss'
})
export class ScrollIndicatorComponent {
  scrollDirection = input();

  imageSrc(){
    return `assets/img/scroll/arrow-${this.scrollDirection()}.png`;
  };
}
