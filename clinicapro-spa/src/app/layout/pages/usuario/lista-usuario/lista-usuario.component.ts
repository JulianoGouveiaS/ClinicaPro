import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { CoreComponentsModule } from 'src/app/core/components/core-components.module';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [
    ToolbarModule,
    CoreComponentsModule,
    DividerModule,
    CardModule,
    TableModule,
  ],
  templateUrl: './lista-usuario.component.html',
  styleUrl: './lista-usuario.component.scss'
})
export class ListaUsuarioComponent implements OnInit {

    products: Product[] = [];

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.productService.getProducts().then((data) => {
            this.products = data;
        });
    }

    limpar() {}

}
