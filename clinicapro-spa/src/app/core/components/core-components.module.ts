import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BotaoEditarComponent } from './buttons/botao-editar/botao-editar.component';
import { BotaoVoltarComponent } from './buttons/botao-voltar/botao-voltar.component';
import { RouterModule } from '@angular/router';
import { BotaoSalvarComponent } from './buttons/botao-salvar/botao-salvar.component';
import { BotaoLimparComponent } from './buttons/botao-limpar/botao-limpar.component';
import { BotaoExcluirComponent } from './buttons/botao-excluir/botao-excluir.component';
import { BotaoNovoComponent } from './buttons/botao-novo/botao-novo.component';
import { TooltipModule } from 'primeng/tooltip';
import { BotaoCancelarComponent } from './buttons/botao-cancelar/botao-cancelar.component';
import { BotaoAdicionarComponent } from './buttons/botao-adicionar/botao-adicionar.component';

@NgModule({
    imports: [
        ButtonModule,
        TooltipModule,
        RouterModule,
    ],
    exports: [
        BotaoEditarComponent,
        BotaoVoltarComponent,
        BotaoSalvarComponent,
        BotaoLimparComponent,
        BotaoExcluirComponent,
        BotaoNovoComponent,
        BotaoCancelarComponent,
        BotaoAdicionarComponent,
    ],
    declarations: [
        BotaoEditarComponent,
        BotaoVoltarComponent,
        BotaoSalvarComponent,
        BotaoLimparComponent,
        BotaoExcluirComponent,
        BotaoNovoComponent,
        BotaoCancelarComponent,
        BotaoAdicionarComponent,
    ],
    providers: [],
})
export class CoreComponentsModule { }
