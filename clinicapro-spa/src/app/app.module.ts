import { LocationStrategy, PathLocationStrategy, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import ngxUiLoaderConfig from './core/config/ngx-ui-loader.config';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { ProductService } from './demo/service/product.service';
import { AppLayoutModule } from './layout/app.layout.module';

registerLocaleData(localePt);

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        NgxUiLoaderModule.forRoot(ngxUiLoaderConfig), // Documentação: https://tdev.app/ngx-ui-loader
        // NgxUiLoaderRouterModule.forRoot({ showForeground: false }), // Mostrar loader no canto inferior direito ao trocar de rota
        // NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
        ToastModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService,
        CustomerService,
        EventService,
        IconService,
        NodeService,
        PhotoService,
        ProductService,
        MessageService,
        ConfirmationService
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
