import { Component, Input } from '@angular/core';

@Component({
    selector: 'botao-adicionar',
    template: `
        <p-button
            [label]="getLabel()"
            icon="pi pi-plus"
            styleClass="p-button-raised p-button-success p-button-text"
            [pTooltip]="getTooltip()"
            tooltipPosition="bottom">
        </p-button>
    `
})

export class BotaoAdicionarComponent {

    label: string = 'Adicionar';

    @Input()
    icone: boolean = false;

    constructor() {}

    getLabel() {
        return this.icone ? '' : this.label;
    }

    getTooltip() {
        return this.icone ? this.label : '';
    }
}
