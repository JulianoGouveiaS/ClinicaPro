import {Component, OnInit} from '@angular/core';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {CoreComponentsModule} from 'src/app/core/components/core-components.module';
import {Paciente} from "../../../../core/models/paciente";
import {PacienteService} from "../../../../core/services/paciente.service";

@Component({
  selector: 'app-lista-paciente',
  standalone: true,
    imports: [
        ToolbarModule,
        CoreComponentsModule,
        DividerModule,
        CardModule,
        TableModule,
    ],
  templateUrl: './lista-paciente.component.html',
  styleUrl: './lista-paciente.component.scss'
})
export class ListaPacienteComponent implements OnInit {

    pacientes: Paciente[] = [];

    constructor(private pacienteService: PacienteService) {}

    ngOnInit(): void {
        this.buscar();
    }

    async buscar() {
        this.pacientes = await this.pacienteService.buscarPorUsuarioLogado() || [];
    }

}
