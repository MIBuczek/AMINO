import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleOfertComponent } from './single-ofert.component';

describe('SingleOfertComponent', () => {
  let component: SingleOfertComponent;
  let fixture: ComponentFixture<SingleOfertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleOfertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleOfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
