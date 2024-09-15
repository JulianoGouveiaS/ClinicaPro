import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

const routes: Routes = [
    { path: '', data: { breadcrumb: 'Usuários' }, component: ListaUsuariosComponent },
    { path: 'cadastro', data: { breadcrumb: 'Cadastrar Usuário' }, component: CadastroUsuarioComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuariosRoutingModule { }
