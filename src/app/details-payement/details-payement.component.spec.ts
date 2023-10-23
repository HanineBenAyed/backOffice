import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPayementComponent } from './details-payement.component';

describe('DetailsPayementComponent', () => {
  let component: DetailsPayementComponent;
  let fixture: ComponentFixture<DetailsPayementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPayementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
