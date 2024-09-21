import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isEmpty } from 'lodash';
import { Permissao } from '../models/permissao';
import { HttpClientService } from './http/http-client.service';
import { TokenService } from './token.service';

@Injectable({ providedIn: 'root' })
export class PermissaoService {

    readonly path = 'permissoes';

    constructor(
        private httpClientService: HttpClientService,
        private tokenService: TokenService,
    ) {}

    possuiPermissao(permissao: string) {
        if (permissao == null || permissao == undefined) {
            return false;
        }
        if (permissao == '') {
            return true;
        }
        const partes = permissao.split('|');
        return partes.some(parte => this.tokenService.getDecoded().scope.some(permissao => permissao == parte));
    }

    filtrar(nome: string, loader: boolean = true) {
        let params = new HttpParams();
        if (!isEmpty(nome)) {
            params = params.append('descricao', nome)
        }
        return this.httpClientService.Get<Permissao[]>(`${this.path}`, { params }, { loader: loader });
    }

}
