import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestraMisionComponent } from './nuestra-mision.component';

describe('NuestraMisionComponent', () => {
  let component: NuestraMisionComponent;
  let fixture: ComponentFixture<NuestraMisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestraMisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuestraMisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
