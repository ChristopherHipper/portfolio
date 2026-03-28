import { Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  navList = signal(['NAVIGATION.whyMe', 'NAVIGATION.skills', 'NAVIGATION.projects', 'NAVIGATION.contact']);
  mobileNavIsOpen = signal(false);
}
