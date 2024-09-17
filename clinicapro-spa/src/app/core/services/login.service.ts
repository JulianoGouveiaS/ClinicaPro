import { Injectable } from '@angular/core';
import { HttpClientService } from './http/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClientService: HttpClientService
  ) { }

  fazerLogin(login: string, senha: string) {
    return this.httpClientService.Post<string>('auth', {login, senha}, {responseType: 'text'}, {useToken:false});
  }

  checkJwt() : Promise<boolean> {
    return new Promise<boolean>(async resolve => {
        const retorno = await this.httpClientService.Get('auth/checkJwt', null, { handleError: false, useToken: true });
        resolve(!!retorno);
    });
  }

}
