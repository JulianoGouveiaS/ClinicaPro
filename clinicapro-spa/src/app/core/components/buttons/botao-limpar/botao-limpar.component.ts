import { Component, Input } from '@angular/core';

@Component({
    selector: 'botao-limpar',
    template: `
        <p-button
            [label]="getLabel()"
            icon="pi pi-eraser"
            styleClass="p-button-raised p-button-danger p-button-text"
            [pTooltip]="getTooltip()"
            tooltipPosition="bottom">
        </p-button>
    `
})

export class BotaoLimparComponent {
    label: string = 'Limpar';

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
