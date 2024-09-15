import { LocalStorageService } from './local-storage.service';
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class TokenService {

    constructor(
        private localStorageService: LocalStorageService,
    ) {
    }

    set(token: string) {
        this.localStorageService.setItem('tknCliPro', token);
    }

    get() : string {
        return this.localStorageService.getItem('tknCliPro');
    }
}
