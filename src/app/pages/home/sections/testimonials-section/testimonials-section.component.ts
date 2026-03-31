import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { FeedbackComponent } from "./feedback/feedback.component";
import { Feedback } from '../../../../shared/interfaces/project.interface';
import { ScrollAnimationDirective } from "../../../../shared/directives/scroll-animation.directive";

@Component({
    selector: 'app-testimonials-section',
    standalone: true,
    imports: [TranslatePipe, FeedbackComponent, ScrollAnimationDirective],
    templateUrl: './testimonials-section.component.html',
    styleUrl: './testimonials-section.component.scss'
})
export class TestimonialsSectionComponent {
    feedbacks: Feedback[] = [
        {
            name: 'FEEDBACK.colleagues1',
            text: 'FEEDBACK.text1',
            link: 'https://github.com/ChristianPohlschneider',
        },
        {
            name: 'FEEDBACK.colleagues2',
            text: 'FEEDBACK.text2',
            link: 'https://github.com/ricci27aut',
        }
    ];
}
