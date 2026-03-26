import { Component, inject, input } from '@angular/core';
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
  isFeedbackOpen = false

  openFeedback() {
    this.isFeedbackOpen = true;
  }

  closeFeedback() {
    this.isFeedbackOpen = false;
  }

}
