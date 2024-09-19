import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isEmpty } from 'lodash';
import { Permissao } from '../models/permissao';
import { HttpClientService } from './http/http-client.service';

@Injectable({ providedIn: 'root' })
export class PermissaoService {

    readonly path = 'permissoes';

    constructor(
        private httpClientService: HttpClientService
    ) {}

    filtrar(nome: string, loader: boolean = true) {
        let params = new HttpParams();
        if (!isEmpty(nome)) {
            params = params.append('descricao', nome)
        }
        return this.httpClientService.Get<Permissao[]>(`${this.path}`, { params }, { loader: loader });
    }

}
