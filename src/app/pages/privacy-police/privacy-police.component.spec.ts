import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { PrivacyPoliceComponent } from './privacy-police.component';

describe('PrivacyPoliceComponent', () => {
  let component: PrivacyPoliceComponent;
  let fixture: ComponentFixture<PrivacyPoliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(),PrivacyPoliceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacyPoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
