import { Component, input } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import { Feedback } from '../../../../../shared/interfaces/project.interface';
import { TruncatePipe } from '../../../../../shared/pipes/pipe';

@Component({
  selector: 'app-feedback',
  imports: [TranslatePipe, TruncatePipe],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
})
export class FeedbackComponent {
  feedback = input<Feedback>();

}
