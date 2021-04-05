import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarImageAddComponent } from './car-image-add.component';

describe('CarImageAddComponent', () => {
  let component: CarImageAddComponent;
  let fixture: ComponentFixture<CarImageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarImageAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarImageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
