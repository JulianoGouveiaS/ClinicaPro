import { DatePipe } from '@angular/common';
import { UsuarioService } from '../../../../core/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { CoreComponentsModule } from 'src/app/core/components/core-components.module';
import { Usuario } from 'src/app/core/models/usuario';
import { SimNaoPipe } from 'src/app/core/pipes/sim-nao.pipe';
import { TagModule } from 'primeng/tag';
import { MensagemService } from 'src/app/core/services/mensagem.service';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [
    ToolbarModule,
    CoreComponentsModule,
    DividerModule,
    CardModule,
    TableModule,
    DatePipe,
    SimNaoPipe,
    TagModule,
    TooltipModule,
  ],
  templateUrl: './lista-usuario.component.html',
  styleUrl: './lista-usuario.component.scss'
})
export class ListaUsuarioComponent implements OnInit {

    usuarios: Usuario[] = [];

    constructor(
        private usuarioService: UsuarioService,
        private mensagemService: MensagemService
    ) {}

    ngOnInit(): void {
        this.buscar();
    }

    async buscar() {
        this.usuarios = await this.usuarioService.buscarPorUsuarioLogado() || [];
    }

    async ativarInativarUsuario(usuario: Usuario) {
        const deuBom = await this.usuarioService.ativarInativarUsuario(usuario);
        if (deuBom) {
            const texto = usuario.ativo ? `inativado` : `ativado`;
            this.mensagemService.sucesso({ detail: `${usuario.pessoa.nome} foi ${texto}` });
            usuario.ativo = !usuario.ativo;
        }
    }

}
