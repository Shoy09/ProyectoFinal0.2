import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesContactComponent } from './features-contact.component';

describe('FeaturesContactComponent', () => {
  let component: FeaturesContactComponent;
  let fixture: ComponentFixture<FeaturesContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturesContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
