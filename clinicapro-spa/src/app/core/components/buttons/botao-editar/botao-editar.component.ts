import { Component, Input } from '@angular/core';

@Component({
    selector: 'botao-editar',
    template: `
        <p-button
            [label]="getLabel()"
            icon="pi pi-pencil"
            styleClass="p-button-raised p-button-info p-button-text"
            [pTooltip]="getTooltip()"
            tooltipPosition="bottom">
        </p-button>
    `
})

export class BotaoEditarComponent {
    label: string = 'Editar';

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
