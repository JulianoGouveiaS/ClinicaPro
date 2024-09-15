import { Usuario } from '../models/usuario';
import { HttpClientService } from './http/http-client.service';
import { Injectable } from '@angular/core';
import {Paciente} from "../models/paciente";

@Injectable({ providedIn: 'root' })
export class PacienteService {

    constructor(
        private httpClientService: HttpClientService
    ) {}

    salvar(paciente: Paciente) {
        return this.httpClientService.Post<Paciente[]>('pacientes/novo', paciente);
    }

}
