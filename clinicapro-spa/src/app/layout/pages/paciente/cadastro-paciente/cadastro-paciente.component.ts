import { Component } from '@angular/core';
import {CalendarModule} from "primeng/calendar";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
    imports: [
        CalendarModule,
        InputNumberModule,
        InputTextModule
    ],
  templateUrl: './cadastro-paciente.component.html',
  styleUrl: './cadastro-paciente.component.scss'
})
export class CadastroPacienteComponent {

}
