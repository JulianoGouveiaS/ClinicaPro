import { Permissao } from "./permissao";
import { Pessoa } from "./pessoa";

export class Usuario {
    id: number;
    pessoa: Pessoa;
    login: string;
    senha: string;
    ativo: boolean;
    ultimoLogin: Date;
    indicadorUsuarioTemporario: boolean;
    permissoes: Permissao[];
}
