import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PacienteComponent} from "./paciente.component";

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: PacienteComponent }
	])],
	exports: [RouterModule]
})
export class PacienteRoutingModule { }
