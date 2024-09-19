import { Usuario } from '../models/usuario';
import { HttpClientService } from './http/http-client.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UsuarioService {

    readonly path = 'usuarios';

    constructor(
        private httpClientService: HttpClientService
    ) {}

    buscarPorUsuarioLogado() {
        return this.httpClientService.Get<Usuario[]>(`${this.path}`);
    }

    buscarPorId(id: number) {
        return this.httpClientService.Get<Usuario>(`${this.path}/${id}`);
    }

    salvar(usuario: Usuario) {
        return this.httpClientService.Post<Usuario>(`${this.path}`, usuario);
    }
}
