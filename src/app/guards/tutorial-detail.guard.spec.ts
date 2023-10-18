import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { tutorialDetailGuard } from './tutorial-detail.guard';

describe('tutorialDetailGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => tutorialDetailGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
