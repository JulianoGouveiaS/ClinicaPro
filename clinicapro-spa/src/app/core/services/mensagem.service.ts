import { Injectable } from '@angular/core';
import * as lodash from 'lodash';
import { Message, MessageService } from 'primeng/api';
import { MENSAGEM } from '../utils/constants';

@Injectable({providedIn: 'root'})
export class MensagemService {

    constructor(
        private messageService: MessageService
    ) {
    }

    add(message: Message) {
        this.messageService.add(message);
    }

    clear(key?: string | undefined) {
        this.messageService.clear(key);
    }

    aviso(message: Message) {
        this.add({ summary: 'Aviso', life: 3000, ...message, severity: 'warn' });
    }

    sucesso(message: Message) {
        this.add({ summary: 'Sucesso', life: 3000, ...message, severity: 'success' });
    }

    informacao(message: Message) {
        this.add({ summary: 'Informação', life: 3000, ...message, severity: 'info' });
    }

    erro(message: Message) {
        this.add({ summary: 'Erro', life: 3000, ...message, severity: 'error' });
    }

    mensagemErroRequisicao(error: any, loaderId: string) {
        let errorIsString = lodash.isString(error);
        let detail = errorIsString ? error : error && lodash.isString(error.error) ? error.error : error && lodash.isString(error.message) ? error.message : MENSAGEM.ERRO_HTTP_GENERICO;
        let summary = 'Erro Inesperado';
        switch (error.status) {
            case 400:
                summary = 'Ops';
                break;
            case 401:
                summary = 'Sessão Expirada';
                detail = 'Faça login novamente.';
                break;
            case 403:
                summary = 'Acesso Negado';
                break;
            case 404:
                summary = 'Não Encontrado';
                break;
            case 405:
                summary = 'Erro';
                break;
            case 500:
                summary = 'Erro Inesperado';
                break;
            default:
                summary = 'Erro Inesperado';
                break;
        }
        this.add({ severity: 'error', summary: summary, detail: detail });
    }

}
