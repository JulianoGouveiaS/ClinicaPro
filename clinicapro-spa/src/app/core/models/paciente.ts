import {Pessoa} from "./pessoa";
import {FamiliarPaciente} from "./FamiliarPaciente";
import {TipoCaptacaoEnum} from "./enums/tipoCaptacaoEnum";

export class Paciente extends Pessoa {
    familiares: FamiliarPaciente[];
    tipoCaptacao: TipoCaptacaoEnum;
}
