import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListaPacienteComponent} from "./lista-paciente/lista-paciente.component";
import {CadastroPacienteComponent} from "./cadastro-paciente/cadastro-paciente.component";

const routes: Routes = [
    { path: '', data: { breadcrumb: 'Pacientes' }, component: ListaPacienteComponent },
    { path: 'cadastro', data: { breadcrumb: 'Cadastrar' }, component: CadastroPacienteComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PacienteRoutingModule { }
