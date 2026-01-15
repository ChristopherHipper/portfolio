import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageLayoutComponent } from './sub-page-layout.component';

describe('SubPageLayoutComponent', () => {
  let component: SubPageLayoutComponent;
  let fixture: ComponentFixture<SubPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubPageLayoutComponent]
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
