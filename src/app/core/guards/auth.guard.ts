import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalstorageService } from '../services/localstorage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const ls=inject(LocalstorageService)
  const router=inject(Router)
  if(!ls.getToken()){
    router.navigate(['/auth/login'])
     return false
  }
  return true
};
