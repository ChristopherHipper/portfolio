import { Routes } from '@angular/router';
import { MainPageLayoutComponent } from './layouts/main-page-layout/main-page-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { SubPageLayoutComponent } from './layouts/sub-page-layout/sub-page-layout.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';

export const routes: Routes = [
    {
        path: '',
        component: MainPageLayoutComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            }
        ]
    },
    {
        path: '',
        component: SubPageLayoutComponent,
        children: [
            {
                path: 'legal-notice',
                component: LegalNoticeComponent
            }
        ]
    }
];
