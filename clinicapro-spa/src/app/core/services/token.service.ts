import { LocalStorageService } from './local-storage.service';
import { Injectable } from "@angular/core";
import { JwtHelperService } from '@auth0/angular-jwt';

class DecodedJwt {
    exp: number;
    iat: number;
    iss: string;
    scope: string[] = [];
    sub: string;
}

@Injectable({providedIn: 'root'})
export class TokenService {

    constructor(
        private localStorageService: LocalStorageService,
        private jwtHelperService: JwtHelperService
    ) {
    }

    set(token: string) {
        this.localStorageService.setItem('tknCliPro', token);
    }

    get() : string {
        return this.localStorageService.getItem('tknCliPro');
    }

    getDecoded() : DecodedJwt {
        return this.jwtHelperService.decodeToken(this.get());
    }
}
