import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { lodingGuard } from './loding.guard';

describe('lodingGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => lodingGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
