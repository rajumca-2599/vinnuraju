import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuefeeComponent } from './duefee.component';

describe('DuefeeComponent', () => {
  let component: DuefeeComponent;
  let fixture: ComponentFixture<DuefeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuefeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuefeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
