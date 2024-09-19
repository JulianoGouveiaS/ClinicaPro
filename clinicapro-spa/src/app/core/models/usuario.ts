import { Permissao } from "./permissao";
import { Pessoa } from "./pessoa";

export class Usuario {
    id: number;
    pessoa: Pessoa;
    login: string;
    senha: string;
    novaSenha: string;
    ativo: boolean;
    ultimoLogin: Date;
    indicadorUsuarioTemporario: boolean;
    permissoes: Permissao[];

    constructor(usuario?: Partial<Usuario>) {
        if (usuario) {
            Object.assign(this, usuario);
        }
    }

}
