import {Pessoa} from "./pessoa";
import {FamiliarPaciente} from "./FamiliarPaciente";
import {TipoCaptacaoEnum} from "./enums/tipoCaptacaoEnum";

export class Paciente extends Pessoa {
    familiares: FamiliarPaciente[] = [];
    tipoCaptacao: TipoCaptacaoEnum;

    constructor(paciente?: Partial<Paciente>) {
        super(paciente);
        if (paciente) {
            Object.assign(this, paciente);
        }
    }
}
