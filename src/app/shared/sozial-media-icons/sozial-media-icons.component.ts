import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sozial-media-icons',
  standalone: true,
  imports: [],
  templateUrl: './sozial-media-icons.component.html',
  styleUrl: './sozial-media-icons.component.scss'
})
export class SozialMediaIconsComponent {
  @Input()iconImg:string = '';
}
