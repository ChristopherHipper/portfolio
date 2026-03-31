import { Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  navList = signal(['whyMe', 'skills', 'projects', 'contact']);
  mobileNavIsOpen = signal(false);
}
