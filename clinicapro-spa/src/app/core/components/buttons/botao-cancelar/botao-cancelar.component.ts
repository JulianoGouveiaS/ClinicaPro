import { Component, Input } from '@angular/core';

@Component({
    selector: 'botao-cancelar',
    template: `
        <p-button
            [label]="getLabel()"
            icon="pi pi-ban"
            styleClass="p-button-raised p-button-danger p-button-text"
            [pTooltip]="getTooltip()"
            tooltipPosition="bottom">
        </p-button>
    `
})

export class BotaoCancelarComponent {
    label: string = 'Cancelar';

    @Input()
    icone: boolean = false;

    getLabel() {
        return this.icone ? '' : this.label;
    }

    getTooltip() {
        return this.icone ? this.label : '';
    }
}
