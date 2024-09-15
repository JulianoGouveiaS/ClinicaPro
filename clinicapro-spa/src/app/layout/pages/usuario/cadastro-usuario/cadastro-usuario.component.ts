import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { CoreComponentsModule } from 'src/app/core/components/core-components.module';

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
export class CadastroUsuarioComponent {

}
