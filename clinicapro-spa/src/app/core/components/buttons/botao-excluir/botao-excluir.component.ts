import { Component, Input } from '@angular/core';

@Component({
    selector: 'botao-excluir',
    template: `
        <p-button
            [label]="getLabel()"
            icon="pi pi-trash"
            styleClass="p-button-raised p-button-danger p-button-text"
            [pTooltip]="getTooltip()"
            tooltipPosition="bottom">
        </p-button>
    `
})

export class BotaoExcluirComponent {
    label: string = 'Excluir';

    @Input()
    navegar: boolean = true;
    @Input()
    icone: boolean = false;

    getLabel() {
        return this.icone ? '' : this.label;
    }

    getTooltip() {
        return this.icone ? this.label : '';
    }
}
