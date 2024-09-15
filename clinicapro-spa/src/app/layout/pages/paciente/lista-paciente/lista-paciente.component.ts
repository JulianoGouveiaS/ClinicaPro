import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { CoreComponentsModule } from 'src/app/core/components/core-components.module';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';

@Component({
  selector: 'app-lista-paciente',
  standalone: true,
  imports: [
    ToolbarModule,
    CoreComponentsModule,
    DividerModule,
    CardModule,
    TableModule,
  ],
  templateUrl: './lista-paciente.component.html',
  styleUrl: './lista-paciente.component.scss'
})
export class ListaPacienteComponent implements OnInit {

    products: Product[] = [];

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.productService.getProducts().then((data) => {
            this.products = data;
        });
    }

    limpar() {}

}
