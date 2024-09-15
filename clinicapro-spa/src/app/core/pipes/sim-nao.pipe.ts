import { Pipe, PipeTransform } from '@angular/core';
import { deburr, isBoolean } from 'lodash';

@Pipe({
    standalone: true,
    name: 'simNao',
})
export class SimNaoPipe implements PipeTransform {

    /**
     * Caso use somente o pipe diretamente sem parametro: Sim e Não
     * Caso passe o primeiro parametro como false: Sim e Não
     * Caso passe o primeiro parametro como true => simNao: true => SIM e NÃO.
     * Caso passe o primeiro parametro como true e o segundo parametro como false => simNao: true:false => SIM e NAO.
     * Caso passe o primeiro parametro como true e o segundo parametro como true => simNao: true:true => SIM e NÃO.
     * Caso passe o primeiro parametro como false e o segundo parametro como true => simNao: false:true => Sim e Nao.
     * @param value
     * @param uppercase
     * @param acentuacao
     * @returns texto formatado como Sim ou Não dependendo do valor do booleano
     */
    transform(value: string, uppercase: boolean = false, acentuacao: boolean = true): string {
        if (!isBoolean(value)) return value;
        let texto = Boolean(value) ? 'Sim' : 'Não';
        if (uppercase) {
            texto = texto.toUpperCase();
        }
        if (!acentuacao) {
            texto = deburr(texto);
        }
        return texto;
    }

}
