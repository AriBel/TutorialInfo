import { CanActivateFn } from '@angular/router';
import { CanActivate } from '@angular/router';

export const tutorialDetailGuard: CanActivateFn = (route, state) => {
  return true;
};


