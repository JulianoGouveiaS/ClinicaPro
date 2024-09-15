import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { isEmpty, isNumber, isString } from 'lodash';

@Component({
    selector: 'botao-editar',
    template: `
        <p-button
            [label]="getLabel()"
            icon="pi pi-pencil"
            styleClass="p-button-raised p-button-info p-button-text"
            [pTooltip]="getTooltip()"
            tooltipPosition="bottom"
            (click)="onClick()">
        </p-button>
    `
})

export class BotaoEditarComponent {
    label: string = 'Editar';

    @Input()
    rota: string;
    @Input()
    objectId: number;
    @Input()
    icone: boolean = false;

    constructor(private router: Router) {}

    onClick() {
        if (this.rota != null && this.rota != undefined && String(this.rota).trim().length > 0) {
            this.router.navigateByUrl(this.rota);
        } else {
            this.router.navigate([`${this.router.url}/cadastro/${this.objectId}`], { preserveFragment: true });
        }
    }

    getLabel() {
        return this.icone ? '' : this.label;
    }

    getTooltip() {
        return this.icone ? this.label : '';
    }
}
