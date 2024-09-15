import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AutoCompleteModule} from "primeng/autocomplete";
import {CalendarModule} from "primeng/calendar";
import {ChipsModule} from "primeng/chips";
import {DropdownModule} from "primeng/dropdown";
import {InputMaskModule} from "primeng/inputmask";
import {InputNumberModule} from "primeng/inputnumber";
import {CascadeSelectModule} from "primeng/cascadeselect";
import {MultiSelectModule} from "primeng/multiselect";
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {FullCalendarModule} from "@fullcalendar/angular";
import {PacienteComponent} from "./paciente.component";
import {PacienteRoutingModule} from "./paciente-routing.module";

@NgModule({
	imports: [
        PacienteRoutingModule,
		CommonModule,
		FormsModule,
		AutoCompleteModule,
		CalendarModule,
		ChipsModule,
		DropdownModule,
		InputMaskModule,
		InputNumberModule,
		CascadeSelectModule,
		MultiSelectModule,
        FullCalendarModule,
        PasswordModule,
		InputTextareaModule,
		InputTextModule
	],
	declarations: [PacienteComponent]
})
export class PacienteModule { }
