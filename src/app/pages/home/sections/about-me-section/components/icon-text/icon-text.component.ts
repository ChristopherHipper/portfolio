import { Component, effect, inject } from '@angular/core';
import { concat, from, interval, of, Subject } from 'rxjs';
import { concatMap, delay, ignoreElements, map, repeat, switchMap, take } from 'rxjs/operators';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../../../../../shared/services/language.service';

interface TypeParams {
  word: string;
  speed: number;
  backwards?: boolean;
}

@Component({
  selector: 'app-icon-text',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './icon-text.component.html',
  styleUrl: './icon-text.component.scss'
})
export class IconTextComponent {
  language = inject(LanguageService);
  icons: string[] = ['remote', 'location'];
  currentIconIndex: number = 0;
  currentIcon: string = 'location';

  typedText = '';
  private reset$ = new Subject<void>();

  constructor() {
    this.reset$
      .pipe(
        switchMap(() =>
          this.getTypewriterEffect(this.language.aboutMeInfos())
        )
      )
      .subscribe(text => (this.typedText = text));

    effect(() => {
      this.language.aboutMeInfos();

      this.resetAnimation();
      this.reset$.next();
    });

    this.reset$.next();
  }

  resetAnimation() {
    this.currentIconIndex = 0
    this.currentIcon = 'location';
    this.shownImg()
  }

  shownImg() {
    this.currentIconIndex++;
    this.currentIconIndex = this.currentIconIndex % this.icons.length;
    this.currentIcon = this.icons[this.currentIconIndex]
  }

  private type({ word, speed, backwards = false }: TypeParams) {
    return interval(speed).pipe(
      map((x) =>
        backwards
          ? word.substring(0, word.length - x - 1)
          : word.substring(0, x + 1)
      ),
      take(word.length)
    );
  }

  typeEffect(word: string) {
    this.shownImg();
    return concat(
      this.type({ word, speed: 50 }),
      of('').pipe(delay(1200), ignoreElements()),
      this.type({ word, speed: 30, backwards: true }),
      of('').pipe(delay(300), ignoreElements())
    );
  }

  getTypewriterEffect(titles: string[]) {
    return from(titles).pipe(
      concatMap((title) => this.typeEffect(title)),
      repeat()
    );
  }
}
