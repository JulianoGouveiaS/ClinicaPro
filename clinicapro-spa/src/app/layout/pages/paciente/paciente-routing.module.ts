import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListaPacienteComponent} from "./lista-paciente/lista-paciente.component";
import {CadastroPacienteComponent} from "./cadastro-paciente/cadastro-paciente.component";

const routes: Routes = [
    { path: '', component: ListaPacienteComponent },
    { path: 'cadastro', component: CadastroPacienteComponent },
    { path: 'cadastro/:id', component: CadastroPacienteComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class PacienteRoutingModule { }
