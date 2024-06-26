import { CanActivateFn, Router } from '@angular/router';
import { AuthentificationService } from './authentification.service';
import { inject } from '@angular/core';

export const authenticationGuard: CanActivateFn = (route, state) => {

  const authentService =inject(AuthentificationService);
  const router = inject(Router)

  if(authentService.authenticated){
    return true;
  }
  return router.parseUrl('/login');
};
