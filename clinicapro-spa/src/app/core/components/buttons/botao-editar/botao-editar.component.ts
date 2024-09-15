import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { isString } from 'lodash';

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
    rota: boolean = true;
    @Input()
    icone: boolean = false;

    constructor(private router: Router) {}

    onClick() {
        if (isString(this.rota)) {
            this.router.navigateByUrl(this.rota);
        } else {
            this.router.navigate([`${this.router.url}/cadastro`], { preserveFragment: true });
        }
    }

    getLabel() {
        return this.icone ? '' : this.label;
    }

    getTooltip() {
        return this.icone ? this.label : '';
    }
}
