import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVehiculo } from './form-vehiculo';

describe('FormVehiculo', () => {
  let component: FormVehiculo;
  let fixture: ComponentFixture<FormVehiculo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormVehiculo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormVehiculo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
