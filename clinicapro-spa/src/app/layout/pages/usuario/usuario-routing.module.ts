import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes, withComponentInputBinding } from '@angular/router';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

const routes: Routes = [
    { path: '', component: ListaUsuarioComponent },
    { path: 'cadastro', component: CadastroUsuarioComponent },
    { path: 'cadastro/:id', component: CadastroUsuarioComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class UsuarioRoutingModule { }
