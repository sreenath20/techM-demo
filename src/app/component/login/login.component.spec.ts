import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { empty } from 'rxjs';

import { LoginComponent } from './login.component';

fdescribe('LoginComponent', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [LoginComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // form validity
  it('Should be invalid when form is empty', () => {
    fixture.detectChanges();
    expect(component.form?.valid).toBeFalsy();
  })
  // field validity

  it('Email field Should be invalid', () => {
    let email = component.form?.controls['email'];
    expect(email?.valid).toBeFalsy();
  });
  // to check validaters 
  it('Email Should validate for required', () => {
    let errors;
    let email = component.form.controls['email'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('Email Should validate for pattern', () => {
    let errors;
    let email = component.form.controls['email'];

    email.setValue("techm.com");
    errors = email.errors || {};
    console.log("Inside email pattern test case:")
    console.log(errors);
    expect(errors['pattern']).toBeTruthy();
  });

  it('Form should be valid with valid data', () => {
    let email = component.form.controls['email'];
    email.setValue("inda@techm.com");
    let password = component.form.controls['password'];
    password.setValue("inda@123");
    expect(email.valid).toBeTruthy();
    expect(password.valid).toBeTruthy();
  });


  it('Form should be invalid with valid email & pwd', () => {
    let email = component.form.controls['email'];
    email.setValue("mysite@.com.my"); // @. not valid
    let password = component.form.controls['password'];
    password.setValue("india"); // min length to be 8 chars
    expect(email.valid).toBeFalsy();
    expect(password.valid).toBeFalsy();
  });

  it('Should reflect form data in the user model', () => {
    let email = component.form.controls['email'];
    email.setValue("mysite@techm.com.my"); // valid
    let password = component.form.controls['password'];
    password.setValue("india@123"); // valid

    component.login();

    expect(component.user.email).toBe("mysite@techm.com.my");
    expect(component.user.password).toBe("india@123");


  });

});




