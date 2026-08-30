import { AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

declare const VANTA: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  constructor(private translate: TranslateService) {
    this.translate.use('en');
  }

  @ViewChild('vantaBackground')
  vantaBackground!: ElementRef;

  private vantaEffect: any;

  ngAfterViewInit(): void {
    this.vantaEffect = VANTA.NET({
      el: this.vantaBackground.nativeElement,

      mouseControls: true,
      touchControls: true,
      gyroControls: false,

      minHeight: 200.00,
      minWidth: 200.00,

      scale: 1.00,
      scaleMobile: 1.00,

      color: 0x3d5663,
      backgroundColor: 0x262e34,

      points: 12.00,
      maxDistance: 20.00,
      spacing: 18.00,

      showDots: false
    });
  }

  ngOnDestroy(): void {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }
}
