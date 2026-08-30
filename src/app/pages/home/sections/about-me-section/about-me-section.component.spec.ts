import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { AboutMeSectionComponent } from './about-me-section.component';
import { provideRouter } from '@angular/router';

describe('AboutMeSectionComponent', () => {
  let component: AboutMeSectionComponent;
  let fixture: ComponentFixture<AboutMeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(),AboutMeSectionComponent],
    providers: [
      provideRouter([])
    ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
