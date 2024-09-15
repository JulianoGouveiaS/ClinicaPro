import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import * as lodash from 'lodash';

@Injectable({providedIn: 'root'})
export class LocalStorageService {

    secretKey = 'asldvhf4iwounovzishviw4univss333';

    constructor() { }

    private encrypt(value: any) : string {
        const strValue = JSON.stringify(value);
        return CryptoJS.AES.encrypt(strValue, this.secretKey.trim()).toString();
    }

    private decrypt(value: string) : string {
        return CryptoJS.AES.decrypt(value, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
    }

    setItem(key: string, value: any) {
        localStorage.setItem(this.encrypt(key), this.encrypt(value));
    }

    getItem(key: string) {
        for (let index = 0; index < localStorage.length; index++) {
            const cryptKey = localStorage.key(index);
            try {
                const decryptedKey = JSON.parse(this.decrypt(cryptKey));
                if (decryptedKey == key) {
                    const storedValue = localStorage.getItem(cryptKey) || '';
                    const decryptedValue = this.decrypt(storedValue);
                    if (!lodash.isEmpty(decryptedValue)) {
                        return JSON.parse(decryptedValue);
                    }
                }
            } catch (error) {
            }
        }
        return null;
    }

    clear() {
        localStorage.clear();
    }
}
