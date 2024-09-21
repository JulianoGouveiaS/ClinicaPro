import { PermissaoService } from './../services/permissao.service';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[possuiPermissao]',
    standalone: true,
})
export class PossuiPermissaoDirective {

    private hasView = false;

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private permissaoService: PermissaoService
    ) { }

    @Input() set possuiPermissao(permissao: string) {
        const condition = this.permissaoService.possuiPermissao(permissao);
        console.log(`hasView`,condition, this.hasView)
        if (!condition) {
            this.viewContainer.clear(); // Remove o conteúdo se a condição for verdadeira
            this.hasView = true;
        } else if (condition) {
            this.viewContainer.createEmbeddedView(this.templateRef); // Mostra o conteúdo se a condição for falsa
        }
    }

}
