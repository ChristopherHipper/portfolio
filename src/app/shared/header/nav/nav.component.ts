import { Component, AfterViewInit, OnDestroy, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements AfterViewInit, OnDestroy {
  navList = signal(['NAVIGATION.whyMe', 'NAVIGATION.skills', 'NAVIGATION.projects', 'NAVIGATION.contact']);
  activeLink = signal('');
  aactiveLink: string = '';
  private observer!: IntersectionObserver;
  options = {
    root: null,
    threshold: 0.7
  };

  getId(id: string) {
    const clickedNavItem = id.split('.')[1]
    return clickedNavItem
  }

  setActiveClass(item: string) {
    this.activeLink.set(item);
  }


  ngAfterViewInit(): void {
    this.initIntersectionObserver();
    this.getSection();
  }

  initIntersectionObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeLink.set(entry.target.id);
        }
      });
    }, this.options);
  }

  getSection() {
    this.navList().forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        this.observer.observe(section);
      }
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

}
