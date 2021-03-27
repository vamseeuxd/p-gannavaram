import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngx-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  newProductName = '';
  @Input() products: { name: string, id: string }[] = [];

  addProduct(): void {
    this.products.push({
      name: this.newProductName.trim(),
      id: this.products.length.toString(),
    });
    this.newProductName = '';
  }
}
