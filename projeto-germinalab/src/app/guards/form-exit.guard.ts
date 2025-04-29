import { CanDeactivateFn } from '@angular/router';

export const formExitGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
