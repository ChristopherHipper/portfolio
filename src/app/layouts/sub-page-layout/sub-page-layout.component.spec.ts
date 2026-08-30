import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SubPageLayoutComponent } from './sub-page-layout.component';
import { TranslateModule } from '@ngx-translate/core';

describe('SubPageLayoutComponent', () => {
  let component: SubPageLayoutComponent;
  let fixture: ComponentFixture<SubPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(),SubPageLayoutComponent],
    providers: [
      provideRouter([])
    ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
