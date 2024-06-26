import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosFinancierosComponent } from './servicios-financieros.component';

describe('ServiciosFinancierosComponent', () => {
  let component: ServiciosFinancierosComponent;
  let fixture: ComponentFixture<ServiciosFinancierosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosFinancierosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiciosFinancierosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
