import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../services/token.service';
import { isString } from 'lodash';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const router: Router = inject(Router);
    const tokenService: TokenService = inject(TokenService);
    const token = tokenService.get();
    if (isString(token)) {
        return true;
    } else {
        router.navigateByUrl(`/auth`)
        return false;
    }
};
