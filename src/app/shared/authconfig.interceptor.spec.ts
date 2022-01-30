import { TestBed } from '@angular/core/testing';
//might cause problem
import { AuthconfigInterceptor } from './authconfig.interceptor';

describe('AuthconfigInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthconfigInterceptor
      ]
  }));
                                                                                              
  it('should be created', () => {
    const interceptor: AuthconfigInterceptor = TestBed.inject(AuthconfigInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
