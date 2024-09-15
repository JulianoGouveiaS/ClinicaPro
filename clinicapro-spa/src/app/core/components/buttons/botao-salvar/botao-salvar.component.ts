import { Component, Input } from '@angular/core';

@Component({
    selector: 'botao-salvar',
    template: `
        <p-button
            [label]="getLabel()"
            icon="pi pi-save"
            styleClass="p-button-raised p-button-success p-button-text"
            [pTooltip]="getTooltip()"
            tooltipPosition="bottom">
        </p-button>
    `
})

export class BotaoSalvarComponent {
    label: string = 'Salvar';

    @Input()
    icone: boolean = false;

    getLabel() {
        return this.icone ? '' : this.label;
    }

    getTooltip() {
        return this.icone ? this.label : '';
    }
}
