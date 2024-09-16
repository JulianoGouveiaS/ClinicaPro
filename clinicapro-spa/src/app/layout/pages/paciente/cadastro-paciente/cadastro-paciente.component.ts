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
import {ValidationHelper} from "../../../../core/utils/ValidationHelper";
import {MessageService} from "primeng/api";
import {MessagesModule} from "primeng/messages";
import {ToastModule} from "primeng/toast";
import {InputMaskModule} from "primeng/inputmask";
import {CepService} from "../../../../core/services/cep.service";
import {Usuario} from "../../../../core/models/usuario";
import {Router} from "@angular/router";

@Component({
    selector: 'app-cadastro-usuario',
    standalone: true,
    imports: [
        CalendarModule,
        InputNumberModule,
        InputTextModule,
        CoreComponentsModule,
        ToolbarModule,
        FormsModule,
        MessagesModule,
        ToastModule,
        InputMaskModule
    ],
    templateUrl: './cadastro-paciente.component.html',
    styleUrl: './cadastro-paciente.component.scss'
})
export class CadastroPacienteComponent implements OnInit {
    paciente: Paciente = new Paciente();


    constructor(private pacienteService: PacienteService,
                private messageService: MessageService,
                private cepService: CepService,
                private router: Router) {
    }

    buscarCEP() {
        const cep = this.paciente.endereco.cep.replace(/\D/g, ''); // Remove qualquer caractere não numérico

        if (cep.length === 8) { // Valida se o CEP tem 8 dígitos
            this.cepService.buscarCEP(cep).subscribe(
                (dados) => {
                    if (!dados.erro) {
                        this.paciente.endereco.logradouro = dados.logradouro;
                        this.paciente.endereco.bairro = dados.bairro;
                        this.paciente.endereco.cidade = dados.localidade;
                        this.paciente.endereco.estado = dados.uf;
                    } else {
                        this.messageService.add({
                            key: 'tst',
                            severity: 'error',
                            summary: 'Oops!',
                            detail: 'CEP nao encontrado'
                        });
                    }
                },
                (error) => {
                    this.messageService.add({
                        key: 'tst',
                        severity: 'error',
                        summary: 'Oops!',
                        detail: 'Erro ao buscar o CEP'
                    });
                    console.error('Erro ao buscar o CEP: ', error);
                }
            );
        }
    }

    ngOnInit(): void {
        this.paciente.endereco = new Endereco();
    }

    limpar() {

    }

    validarCampos() {
        if (!ValidationHelper.validarCampoObrigatorio(this.paciente.nome)) {
            this.messageService.add({key: 'tst', severity: 'error', summary: 'Oops!', detail: 'Nome Invalido'});
            return false
        }
        if (!ValidationHelper.validarTelefone(this.paciente.telefone)) {
            this.messageService.add({key: 'tst', severity: 'error', summary: 'Oops!', detail: 'Telefone Invalido'});
            return false
        }
        // if (!ValidationHelper.validarEmail(this.paciente.email)) {
        //     this.messageService.add({key: 'tst', severity: 'error', summary: 'Oops!', detail: 'Email Invalido'});
        //     return false
        // }
        //
        // if (!ValidationHelper.validarCPF(this.paciente.documento)) {
        //     this.messageService.add({key: 'tst', severity: 'error', summary: 'Oops!', detail: 'Documento Invalido'});
        //     return false
        // }
        //
        // if (!this.paciente.dataNascimento) {
        //     this.messageService.add({key: 'tst', severity: 'error', summary: 'Oops!', detail: 'Data de Nascimento Invalido'});
        //     return false
        // }

        return true
    }

    construirBody(): Paciente {
        let body: Paciente = this.paciente;
        if(this.paciente.dataNascimento){
            body.dataNascimento = new Date(this.paciente.dataNascimento);
        }
        if(this.paciente.telefone){
            body.telefone = this.paciente.telefone.replace(/\D/g, ''); // Remove qualquer caractere não numérico
        }

        return body;
    }

    async salvar() {
        let valido = this.validarCampos()
        let body = this.construirBody()
        if (valido) {
            let usuarioSalvo: Usuario = await this.pacienteService.salvar(body)
            if (usuarioSalvo && usuarioSalvo.id)
                this.messageService.add({
                    key: 'tst',
                    severity: 'success',
                    summary: 'Success Message',
                    detail: 'Message sent'
                });
        }
    }
}
