import {Endereco} from "./Endereco";

export class Pessoa {
    id: number;
    nome: string;
    dataNascimento: Date;
    documento: string;
    email: string;
    telefone: string;
    dataCadastro: Date;
    idade: number;
    endereco: Endereco;
}
