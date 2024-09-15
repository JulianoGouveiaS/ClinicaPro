import { DatePipe } from '@angular/common';
import { UsuarioService } from './../../../../core/services/usuario.services';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { CoreComponentsModule } from 'src/app/core/components/core-components.module';
import { Usuario } from 'src/app/core/models/usuario';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { SimNaoPipe } from 'src/app/core/pipes/sim-nao.pipe';

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
    SimNaoPipe
  ],
  templateUrl: './lista-usuario.component.html',
  styleUrl: './lista-usuario.component.scss'
})
export class ListaUsuarioComponent implements OnInit {

    usuarios: Usuario[] = [];

    constructor(private usuarioService: UsuarioService) {}

    ngOnInit(): void {
        this.buscar();
    }

    async buscar() {
        this.usuarios = await this.usuarioService.buscarPorUsuarioLogado() || [];
    }

}
