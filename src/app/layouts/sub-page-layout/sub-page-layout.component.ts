import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { LegalNoticeComponent } from '../../pages/legal-notice/legal-notice.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-sub-page-layout',
  standalone: true,
  imports: [HeaderComponent, LegalNoticeComponent, FooterComponent],
  templateUrl: './sub-page-layout.component.html',
  styleUrl: './sub-page-layout.component.scss'
})
export class SubPageLayoutComponent {

}
