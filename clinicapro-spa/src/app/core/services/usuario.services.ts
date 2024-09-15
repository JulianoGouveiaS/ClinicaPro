import { Usuario } from '../models/usuario';
import { HttpClientService } from './http/http-client.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UsuarioService {

    constructor(
        private httpClientService: HttpClientService
    ) {}

    buscarPorUsuarioLogado() {
        return this.httpClientService.Get<Usuario[]>('usuarios');
    }

}
