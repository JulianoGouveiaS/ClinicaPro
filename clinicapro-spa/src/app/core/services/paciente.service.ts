import { Usuario } from '../models/usuario';
import { HttpClientService } from './http/http-client.service';
import { Injectable } from '@angular/core';
import {Paciente} from "../models/paciente";

@Injectable({ providedIn: 'root' })
export class PacienteService {

    readonly path = 'pacientes';

    constructor(
        private httpClientService: HttpClientService
    ) {}

    salvar(paciente: Paciente) {
        return this.httpClientService.Post<any>(`${this.path}/novo`, paciente);
    }

    buscarPorUsuarioLogado() {
        return this.httpClientService.Get<Paciente[]>(`${this.path}/`);
    }

    buscarPorId(idPaciente: number) {
        return this.httpClientService.Get<Paciente>(`${this.path}/${idPaciente}`);
    }
}
