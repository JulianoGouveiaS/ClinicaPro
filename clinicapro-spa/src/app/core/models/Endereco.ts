import {FamiliarPaciente} from "./FamiliarPaciente";

export class Endereco {
    id: number;
    idPessoa: number;
    cep: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;

    constructor(endereco?: Partial<Endereco>) {
        if (endereco) {
            Object.assign(this, endereco);
        }
    }
}
