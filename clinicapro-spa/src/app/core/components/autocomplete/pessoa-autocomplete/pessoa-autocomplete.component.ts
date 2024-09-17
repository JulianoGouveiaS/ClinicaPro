import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { UsuarioService } from '../../../services/usuario.service';
import { Pessoa } from 'src/app/core/models/pessoa';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PessoaService } from 'src/app/core/services/pessoa.service';

@Component({
    selector: 'pessoa-autocomplete',
    standalone: true,
    imports: [
        AutoCompleteModule,
        FormsModule,
    ],
    templateUrl: './pessoa-autocomplete.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PessoaAutoCompleteComponent),
            multi: true
        }
    ]
})
export class PessoaAutoCompleteComponent implements OnInit, ControlValueAccessor {

    @Input() label: string = 'Pessoa';

    pessoaSelecionada: Pessoa;
    pessoasFiltradas: Pessoa[] = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private usuarioService: UsuarioService,
        private router: Router,
        private pessoaService: PessoaService,
    ) { }

    ngOnInit() {
    }

    async filtrarPessoas(event: AutoCompleteCompleteEvent) {
        await this.pessoaService.filtrar(event.query)
            .then(response => {
                if (response) {
                    this.pessoasFiltradas = [...response];
                }
            })

    }

    // Funções do ControlValueAccessor
    private onChange: (value: any) => void;
    private onTouched: () => void;

    // Escreve o valor passado para o componente
    writeValue(value: any): void {
        this.pessoaSelecionada = value;
    }

    // Registra uma função que será chamada quando o valor mudar
    registerOnChange(fn: (value: any) => void): void {
        this.onChange = fn;
    }

    // Registra uma função que será chamada quando o campo for "tocado"
    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    // Habilitar/Desabilitar o campo
    setDisabledState?(isDisabled: boolean): void {
        // Lógica para desabilitar o componente
    }

    // Função chamada quando um item é selecionado
    onSelect(item: any) {
        this.pessoaSelecionada = item;
        if (this.onChange) {
            this.onChange(this.pessoaSelecionada);
        }
        if (this.onTouched) {
            this.onTouched();
        }
    }

}
