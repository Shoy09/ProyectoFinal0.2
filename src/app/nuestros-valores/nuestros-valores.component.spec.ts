import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosValoresComponent } from './nuestros-valores.component';

describe('NuestrosValoresComponent', () => {
  let component: NuestrosValoresComponent;
  let fixture: ComponentFixture<NuestrosValoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestrosValoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuestrosValoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
