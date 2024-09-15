import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { LoginService } from './../../core/services/login.service';
import { TokenService } from 'src/app/core/services/token.service';
import { isString } from 'lodash';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    login!: string;
    senha!: string;
    token!: string;

    constructor(
        public layoutService: LayoutService,
        private loginService: LoginService,
        private tokenService: TokenService,
        private router: Router
    ) {
        if (isString(this.tokenService.get())) {
            this.router.navigateByUrl('/')
        }
    }

    async fazerLogin() {
        const retorno = await this.loginService.fazerLogin(this.login, this.senha);
        if (isString(retorno)) {
            this.tokenService.set(retorno);
            this.router.navigateByUrl('/')
        }
    }

}
