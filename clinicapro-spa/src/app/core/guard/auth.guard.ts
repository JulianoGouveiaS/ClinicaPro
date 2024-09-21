import { LoginService } from './../services/login.service';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../services/token.service';
import { isString } from 'lodash';
import { UsuarioService } from '../services/usuario.service';

export const authGuard: CanActivateFn = async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const router: Router = inject(Router);
    const tokenService: TokenService = inject(TokenService);
    const loginService: LoginService = inject(LoginService);
    const usuarioService: UsuarioService = inject(UsuarioService);

    const token = tokenService.get();
    if (isString(token)) {
        const jwtValido = await loginService.checkJwt();
        if (jwtValido) {
            return true;
        }
    }
    usuarioService.sairDoSistema();
    return false;
};
