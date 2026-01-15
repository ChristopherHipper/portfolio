import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SozialMediaIconsComponent } from './sozial-media-icons.component';

describe('SozialMediaIconsComponent', () => {
  let component: SozialMediaIconsComponent;
  let fixture: ComponentFixture<SozialMediaIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SozialMediaIconsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SozialMediaIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
