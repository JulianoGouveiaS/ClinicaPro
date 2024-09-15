import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'botao-voltar',
    template: `
        <p-button
            [label]="getLabel()"
            icon="pi pi-chevron-left"
            styleClass="p-button-raised p-button-secondary p-button-text"
            (click)="onClick()"
            tooltipPosition="bottom">
        </p-button>
    `
})

export class BotaoVoltarComponent {

    label: string = 'Voltar'

    @Input()
    navegar: boolean = true;
    @Input()
    icone: boolean = false;

    constructor(private _location: Location) {}

    onClick() {
        if (this.navegar) {
            this._location.back();
        }
    }

    getLabel() {
        return this.icone ? '' : this.label;
    }

    getTooltip() {
        return this.icone ? this.label : '';
    }
}
