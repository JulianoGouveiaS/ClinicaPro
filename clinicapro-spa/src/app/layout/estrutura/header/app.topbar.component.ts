import { TokenService } from 'src/app/core/services/token.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "../../service/app.layout.service";
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    itensMenuPerfil: MenuItem[] = [];

    constructor(
        public layoutService: LayoutService,
        private tokenService: TokenService,
        public usuarioService: UsuarioService,
    ) { }

    ngOnInit(): void {
        this.itensMenuPerfil = [
            {
                label: this.tokenService.getDecoded().sub,
                items: [
                    {
                        label: 'Sair',
                        icon: 'pi pi-exit'
                    },
                ]
            }
        ]
    }

}
