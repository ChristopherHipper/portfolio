import { Component, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  navList:string[] = ['Why me', 'Skills', 'Projects', 'Contact']
  activeLink: string = '';

  setActiveClass(item:string){
    this.activeLink = item;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event:any){
    console.log('scrolling');
    
  }
  
}
