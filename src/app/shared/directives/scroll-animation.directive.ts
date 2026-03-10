import { AfterViewInit, Directive, ElementRef, Input, OnDestroy} from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements AfterViewInit, OnDestroy {
  @Input() type: 'slide-bottom' | 'fade' | 'slide-left' | 'slide-right' | 'flip' = 'fade';

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {
   }

  ngAfterViewInit(): void {
    this.initAnimationObserver()
  }

  initAnimationObserver() {
    const nativeEl = this.el.nativeElement;
    nativeEl.classList.add('scroll-animate', this.type);
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
