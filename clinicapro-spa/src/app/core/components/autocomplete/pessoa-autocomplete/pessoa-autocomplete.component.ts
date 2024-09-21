import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { UsuarioService } from '../../../services/usuario.service';
import { Pessoa } from 'src/app/core/models/pessoa';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PessoaService } from 'src/app/core/services/pessoa.service';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { isEmpty, isNumber } from 'lodash';
import { CommonModule } from '@angular/common';
import { PossuiPermissaoDirective } from 'src/app/core/directives/possui-permissao.directive';

@Component({
    selector: 'pessoa-autocomplete',
    standalone: true,
    imports: [
        CommonModule,
        AutoCompleteModule,
        FormsModule,
        TooltipModule,
        RippleModule,
        DialogModule,
        ButtonModule,
        InputTextModule,
        CalendarModule,
        InputMaskModule,
        PossuiPermissaoDirective,
    ],
    templateUrl: './pessoa-autocomplete.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PessoaAutoCompleteComponent),
            multi: true
        },
    ]
})
export class PessoaAutoCompleteComponent implements OnInit, ControlValueAccessor {

    @Input() label: string = 'Pessoa';

    pessoaSelecionada: Pessoa;
    pessoasFiltradas: Pessoa[] = [];

    mostrarModalPessoa: boolean = false;
    novaPessoa: Pessoa = new Pessoa();

    constructor(
        private activatedRoute: ActivatedRoute,
        private usuarioService: UsuarioService,
        private router: Router,
        private pessoaService: PessoaService,
    ) { }

    ngOnInit() {
    }

    async filtrarPessoas(event: AutoCompleteCompleteEvent) {
        await this.pessoaService.filtrar(event.query, { backgroundLoader: true })
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

    temPessoaSelecionada() : boolean {
        return !!this.pessoaSelecionada && isNumber(this.pessoaSelecionada.id);
    }

    fecharModalPessoa() {
        this.mostrarModalPessoa = false;
        this.novaPessoa = new Pessoa();
    }

    async salvarNovaPessoa() {
        const pessoaSalva = await this.pessoaService.salvar(this.novaPessoa);
        if (pessoaSalva && isNumber(pessoaSalva.id)) {
            this.mostrarModalPessoa = false;
            this.novaPessoa = new Pessoa();
            this.onSelect(pessoaSalva);
        }
    }


}
