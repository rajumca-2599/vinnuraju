import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeacComponent } from './homeac.component';

describe('HomeacComponent', () => {
  let component: HomeacComponent;
  let fixture: ComponentFixture<HomeacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
