import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFinancialOfficerComponent } from './login-financial-officer.component';

describe('LoginFinancialOfficerComponent', () => {
  let component: LoginFinancialOfficerComponent;
  let fixture: ComponentFixture<LoginFinancialOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFinancialOfficerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFinancialOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
