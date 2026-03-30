import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-legal-notice',
    standalone: true,
    imports: [TranslatePipe],
    templateUrl: './legal-notice.component.html',
    styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent{
    isInit = signal(false);

    ngOnInit(){
          
         setTimeout(()=>{
            this.isInit.set(true);
        },10)
    }

}
