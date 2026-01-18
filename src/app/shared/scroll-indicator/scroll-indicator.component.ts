import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scroll-indicator',
  standalone: true,
  imports: [],
  templateUrl: './scroll-indicator.component.html',
  styleUrl: './scroll-indicator.component.scss'
})
export class ScrollIndicatorComponent {
  @Input() scrollDirection: 'up' | 'down' = 'down';
  @Input() scrollTarget: 'whyMe' | 'hero' = 'whyMe';

  imageSrc(){
    return `assets/img/scroll/arrow-${this.scrollDirection}.png`;
  }
}
