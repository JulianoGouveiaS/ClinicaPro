import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { ToolbarModule } from 'primeng/toolbar';
import { CoreComponentsModule } from 'src/app/core/components/core-components.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    ToolbarModule,
    CoreComponentsModule,
  ]
})
export class UsuarioModule { }
