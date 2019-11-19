import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableEmployeesComponent } from './available-employees.component';

describe('AvailableEmployeesComponent', () => {
  let component: AvailableEmployeesComponent;
  let fixture: ComponentFixture<AvailableEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
