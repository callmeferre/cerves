import { ComponentFixture, TestBed } from '@angular/core/testing';

import { beersComponent } from './beers.component';

describe('beersComponent', () => {
  let component: beersComponent;
  let fixture: ComponentFixture<beersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [beersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(beersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
