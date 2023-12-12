import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { noSesionGuard } from './no-sesion.guard';

describe('noSesionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => noSesionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
