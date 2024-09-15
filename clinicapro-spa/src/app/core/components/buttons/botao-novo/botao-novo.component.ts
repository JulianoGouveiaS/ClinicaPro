import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { isString } from 'lodash';

@Component({
    selector: 'botao-novo',
    template: `
        <p-button
            [label]="getLabel()"
            icon="pi pi-plus"
            styleClass="p-button-raised p-button-success p-button-text"
            (click)="onClick()"
            [pTooltip]="getTooltip()"
            tooltipPosition="bottom">
        </p-button>
    `
})

export class BotaoNovoComponent {

    label: string = 'Novo';

    @Input()
    rota: string;
    @Input()
    icone: boolean = false;

    constructor(private router: Router) {}

    getLabel() {
        return this.icone ? '' : this.label;
    }

    onClick() {
        if (this.rota != null && this.rota != undefined && String(this.rota).trim().length > 0) {
            this.router.navigateByUrl(this.rota);
        } else {
            this.router.navigate([`${this.router.url}/cadastro`], { preserveFragment: true });
        }
    }

    getTooltip() {
        return this.icone ? this.label : '';
    }
}
