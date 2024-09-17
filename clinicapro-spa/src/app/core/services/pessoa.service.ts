import { HttpParams } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { HttpClientService } from './http/http-client.service';
import { Injectable } from '@angular/core';
import { isEmpty } from 'lodash';
import { Pessoa } from '../models/pessoa';

@Injectable({ providedIn: 'root' })
export class PessoaService {

    readonly path = 'pessoas';

    constructor(
        private httpClientService: HttpClientService
    ) {}

    filtrar(nome: string) {
        let params = new HttpParams();
        if (!isEmpty(nome)) {
            params = params.append('nome', nome)
        }
        return this.httpClientService.Get<Pessoa[]>(`${this.path}`, { params });
    }

}
