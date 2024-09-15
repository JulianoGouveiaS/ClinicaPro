import { Location } from '@angular/common';
import { UsuarioService } from './../../../../core/services/usuario.services';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { CoreComponentsModule } from 'src/app/core/components/core-components.module';
import { Usuario } from 'src/app/core/models/usuario';

@Component({
    selector: 'app-cadastro-usuario',
    standalone: true,
    imports: [
        ToolbarModule,
        CoreComponentsModule,
        DividerModule,
        CardModule,
        TableModule,
    ],
    templateUrl: './cadastro-usuario.component.html',
    styleUrl: './cadastro-usuario.component.scss'
})
export class CadastroUsuarioComponent implements OnInit {

    usuario: Usuario = new Usuario();

    constructor(
        private activatedRoute: ActivatedRoute,
        private usuarioService: UsuarioService,
        private router: Router
    ) {}

    ngOnInit() {
        this.verificarUsuarioEditando();
    }

    async verificarUsuarioEditando() {
        const idUsuarioEditando = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        if (idUsuarioEditando > 0) {
            const retorno = await this.usuarioService.buscarPorId(idUsuarioEditando);
            if (!retorno) {
                this.router.navigateByUrl('/usuario')
            }
        }
    }

}
