import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MainPageLayoutComponent } from './main-page-layout.component';
import { provideRouter } from '@angular/router';

describe('MainPageLayoutComponent', () => {
  let component: MainPageLayoutComponent;
  let fixture: ComponentFixture<MainPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(),MainPageLayoutComponent],
    providers: [
      provideRouter([])
    ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
