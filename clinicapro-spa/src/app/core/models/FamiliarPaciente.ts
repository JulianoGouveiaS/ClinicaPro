import {Pessoa} from "./pessoa";
import {TipoFamiliarEnum} from "./enums/tipoFamiliarEnum";

export class FamiliarPaciente {
    id: number;
    tipo: TipoFamiliarEnum;
    familiar: Pessoa;
    paciente: Pessoa;
}
