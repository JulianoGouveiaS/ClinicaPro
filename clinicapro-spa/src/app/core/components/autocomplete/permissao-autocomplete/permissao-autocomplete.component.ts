import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isEmpty } from 'lodash';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { Permissao } from 'src/app/core/models/permissao';
import { PermissaoService } from 'src/app/core/services/permissao.service';

@Component({
    selector: 'permissao-autocomplete',
    standalone: true,
    imports: [
        AutoCompleteModule,
        FormsModule,
    ],
    templateUrl: './permissao-autocomplete.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PermissaoAutoCompleteComponent),
            multi: true
        }
    ]
})
export class PermissaoAutoCompleteComponent implements OnInit, ControlValueAccessor {

    @Input() label: string = 'Permissões';

    permissoesSelecionada: Permissao[] = [];
    permissoesFiltradas: Permissao[] = [];

    constructor(
        private permissaoService: PermissaoService,
    ) { }

    ngOnInit() {
    }

    async filtrarPermissoes(event: AutoCompleteCompleteEvent) {
        await this.permissaoService.filtrar(event.query)
            .then(response => {
                if (response) {
                    this.permissoesFiltradas = [...response];
                }
            })

    }

    // Funções do ControlValueAccessor
    private onChange: (value: any) => void;
    private onTouched: () => void;

    // Escreve o valor passado para o componente
    writeValue(value: any[]): void {
        this.permissoesSelecionada = value;
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
    onSelect(item: Permissao, removing: boolean = false) {
        if (isEmpty(this.permissoesSelecionada))
            this.permissoesSelecionada = [];
        if (!this.permissoesSelecionada.some(permissao => permissao.id == item.id))
            this.permissoesSelecionada.push(item);
        if (removing) {
            this.permissoesSelecionada.splice(this.permissoesSelecionada.indexOf(item));
        }
        if (this.onChange) {
            this.onChange(this.permissoesSelecionada);
        }
        if (this.onTouched) {
            this.onTouched();
        }
    }

}
