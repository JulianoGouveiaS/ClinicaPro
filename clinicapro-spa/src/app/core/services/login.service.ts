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
    return this.httpClientService.Post<string>('login', {login, senha}, {responseType: 'text'}, {useToken:false});
  }

  teste() {
    return this.httpClientService.Get('login');
  }

}
