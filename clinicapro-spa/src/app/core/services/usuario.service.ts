import { Usuario } from '../models/usuario';
import { HttpClientService } from './http/http-client.service';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UsuarioService {

    readonly path = 'usuarios';

    constructor(
        private httpClientService: HttpClientService,
        private localStorageService: LocalStorageService,
        private router: Router,
    ) {}

    sairDoSistema() {
        this.localStorageService.clear();
        this.router.navigateByUrl(`/auth`);
    }

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
