import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CervesComponent } from './cerves.component';

describe('CervesComponent', () => {
  let component: CervesComponent;
  let fixture: ComponentFixture<CervesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CervesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CervesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
