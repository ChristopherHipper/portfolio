import { Component, ElementRef, HostListener, inject, input, signal, ViewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Feedback } from '../../../../../shared/interfaces/project.interface';
import { TruncatePipe } from '../../../../../shared/pipes/pipe';
import { DeviceService } from '../../../../../shared/services/device.service';

@Component({
  selector: 'app-feedback',
  imports: [TranslatePipe, TruncatePipe],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
})
export class FeedbackComponent {
  mobile = inject(DeviceService)
  feedback = input<Feedback>();
  isOpen = signal(false);

  openFeedback() {
    this.isOpen.set(true)
  }

  closeFeedback() {
    this.isOpen.set(false)
  }


  @ViewChild('feedbackRef') feedbackRef!: ElementRef;
  @ViewChild('closeBtn', { read: ElementRef }) closeBtn!: ElementRef;
  @ViewChild('openBtn', { read: ElementRef }) openBtn!: ElementRef;


  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this.isOpen()) return;
    const target = event.target as HTMLElement;
    
    const clickedInsideFeedback = this.feedbackRef?.nativeElement.contains(target);
    const clickedCloseBtn = this.closeBtn?.nativeElement.contains(target);
     const clickedOpenBtn = target.closest('.btn-container');

    console.log(clickedOpenBtn);
    


    if (!clickedInsideFeedback && !clickedCloseBtn && !clickedOpenBtn) {
      this.isOpen.set(false);
    }
  }

}
