import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(LoginService);
  // });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it('expecting actual auth value', () => {
    service = new LoginService(new AuthService());
    expect(service.getValue()).toBe('Actual Auth value');
  });

  it('Expecting spy object to return the value', () => {
    // create proxy object
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['getValue']);
    // train the proxy object method
    authServiceSpy.getValue.and.returnValue('Spy auth value');

    service = new LoginService(authServiceSpy);

    expect(service.getValue())
      .withContext('Login service returns stub value')
      .toBe('Spy auth value');
  });

});
