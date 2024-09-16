import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PacienteRoutingModule} from './paciente-routing.module';
import {ToolbarModule} from 'primeng/toolbar';
import {CoreComponentsModule} from 'src/app/core/components/core-components.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        PacienteRoutingModule,
        ToolbarModule,
        CoreComponentsModule,
    ]
})
export class PacienteModule { }
