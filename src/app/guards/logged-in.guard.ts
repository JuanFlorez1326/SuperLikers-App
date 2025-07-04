import { CanActivateFn } from '@angular/router';

export const loggedInGuard: CanActivateFn = () => {
  const token = localStorage.getItem('token');

  if (token) {
    window.location.href = '/home';
    return false;
  }

  return true;
};
