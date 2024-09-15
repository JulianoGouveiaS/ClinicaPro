import {Component, OnInit} from '@angular/core';
import {CalendarModule} from "primeng/calendar";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";
import {CoreComponentsModule} from "../../../../core/components/core-components.module";
import {ToolbarModule} from "primeng/toolbar";
import {FormsModule} from "@angular/forms";
import {Paciente} from "../../../../core/models/paciente";
import {PacienteService} from "../../../../core/services/paciente.service";
import {Endereco} from "../../../../core/models/Endereco";

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
    imports: [
        CalendarModule,
        InputNumberModule,
        InputTextModule,
        CoreComponentsModule,
        ToolbarModule,
        FormsModule
    ],
  templateUrl: './cadastro-paciente.component.html',
  styleUrl: './cadastro-paciente.component.scss'
})
export class CadastroPacienteComponent implements OnInit  {
    paciente: Paciente = new Paciente();


    constructor(private pacienteService: PacienteService) {}

    ngOnInit(): void {
        this.paciente.endereco = new Endereco();
    }

    limpar(){

    }

    salvar(){
        let usuarioSalvo = this.pacienteService.salvar(this.paciente)
    }
}
