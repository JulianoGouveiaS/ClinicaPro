import { LoginService } from './../services/login.service';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../services/token.service';
import { isString } from 'lodash';
import { LocalStorageService } from '../services/local-storage.service';

export const authGuard: CanActivateFn = async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const router: Router = inject(Router);
    const tokenService: TokenService = inject(TokenService);
    const loginService: LoginService = inject(LoginService);
    const localStorageService: LocalStorageService = inject(LocalStorageService);

    const token = tokenService.get();
    if (isString(token)) {
        const jwtValido = await loginService.checkJwt();
        if (jwtValido) {
            return true;
        }
    }
    localStorageService.clear();
    router.navigateByUrl(`/auth`)
    return false;
};
