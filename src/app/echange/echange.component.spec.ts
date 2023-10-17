import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchangeComponent } from './echange.component';

describe('EchangeComponent', () => {
  let component: EchangeComponent;
  let fixture: ComponentFixture<EchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
