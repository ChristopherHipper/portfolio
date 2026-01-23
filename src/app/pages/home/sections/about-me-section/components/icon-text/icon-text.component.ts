import { Component } from '@angular/core';
import { concat, from, interval, of } from 'rxjs';
import { concatMap, delay, ignoreElements, map, repeat, take } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';

interface TypeParams {
  word: string;
  speed: number;
  backwards?: boolean;
}

@Component({
  selector: 'app-icon-text',
  standalone: true,
  imports: [ AsyncPipe],
  templateUrl: './icon-text.component.html',
  styleUrl: './icon-text.component.scss'
})
export class IconTextComponent {
  titles: string[] = ['located in Germany..', 'ready to work remote..'];
  icons: string[] = ['assets/img/aboutme/remote.png', 'assets/img/aboutme/location.png'];
  currentIconIndex: number = 0;
  currentIcon:string = 'assets/img/aboutme/location.png';

  shownImg(){
    this.currentIconIndex++;
    this.currentIconIndex = this.currentIconIndex % this.icons.length;
    this.currentIcon = this.icons[this.currentIconIndex]
  }
  
  typedText$ = this.getTypewriterEffect(this.titles).pipe(map((text) => text));

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
