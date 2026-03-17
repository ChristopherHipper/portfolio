import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, signal } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements AfterViewInit, OnDestroy {
  @Input() type: 'slide-bottom' | 'fade' | 'slide-left' | 'slide-right' | 'flip' = 'fade';
  isMobile = signal(window.innerWidth < 1024)
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {
    window.addEventListener('resize', () => {
      this.isMobile.set(window.innerWidth < 1024);
    });
  }

  getAnimaton() {
    if (this.isMobile()) {
      return 'fade'
    } else {
      return this.type
    }

  }

  ngAfterViewInit(): void {
    this.initAnimationObserver()
  }

  initAnimationObserver() {
    const nativeEl = this.el.nativeElement;
    nativeEl.classList.add('scroll-animate', this.getAnimaton());
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          nativeEl.classList.add('in-view');
        }
      });
    }, { threshold: 0.5 });

    this.observer.observe(nativeEl);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

}
