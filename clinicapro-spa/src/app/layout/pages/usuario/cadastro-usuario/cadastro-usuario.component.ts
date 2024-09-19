import { MensagemService } from './../../../../core/services/mensagem.service';
import { Location } from '@angular/common';
import { UsuarioService } from '../../../../core/services/usuario.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { CoreComponentsModule } from 'src/app/core/components/core-components.module';
import { Usuario } from 'src/app/core/models/usuario';
import { PessoaAutoCompleteComponent } from 'src/app/core/components/autocomplete/pessoa-autocomplete/pessoa-autocomplete.component';
import { FormsModule } from '@angular/forms';
import { PermissaoAutoCompleteComponent } from 'src/app/core/components/autocomplete/permissao-autocomplete/permissao-autocomplete.component';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { isNumber } from 'lodash';

@Component({
    selector: 'app-cadastro-usuario',
    standalone: true,
    imports: [
        FormsModule,
        ToolbarModule,
        CoreComponentsModule,
        DividerModule,
        CardModule,
        TableModule,
        PessoaAutoCompleteComponent,
        PermissaoAutoCompleteComponent,
        InputTextModule,
        CheckboxModule,
        InputSwitchModule,
    ],
    templateUrl: './cadastro-usuario.component.html',
    styleUrl: './cadastro-usuario.component.scss'
})
export class CadastroUsuarioComponent implements OnInit {

    usuario: Usuario = new Usuario();

    constructor(
        private activatedRoute: ActivatedRoute,
        private usuarioService: UsuarioService,
        private router: Router,
        private mensagemService: MensagemService,
    ) {}

    ngOnInit() {
        this.verificarUsuarioEditando();
    }

    async verificarUsuarioEditando() {
        const idUsuarioEditando = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        if (idUsuarioEditando > 0) {
            const retorno = await this.usuarioService.buscarPorId(idUsuarioEditando);
            if (!retorno) {
                this.router.navigateByUrl('/usuario');
            } else {
                this.usuario = Object.assign(this.usuario, retorno);
            }
        }
    }

    isEditando() : boolean {
        return !!this.usuario?.id;
    }

    async salvar() {
        const usuarioSalvo = await this.usuarioService.salvar(this.usuario);
        if (usuarioSalvo && isNumber(usuarioSalvo.id)) {
            this.usuario = new Usuario(usuarioSalvo);
            this.usuario.novaSenha = null;
            this.mensagemService.sucesso({ detail: 'Usuário salvo com sucesso' })
        }
    }

}
