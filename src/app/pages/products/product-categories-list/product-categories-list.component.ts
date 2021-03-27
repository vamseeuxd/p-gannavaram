import {Component} from '@angular/core';

@Component({
  selector: 'ngx-products-categories-list',
  templateUrl: './product-categories-list.component.html',
  styleUrls: ['./product-categories-list.component.scss'],
})
export class ProductCategoriesListComponent {
  newProductCategoryName = '';
  productCategories: { name: string, id: string, products: { name: string, id: string }[] }[] = [
    {
      id: '0', name: 'Test 1', products: [
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
        {id: '0', name: 'Test 1'},
      ],
    },
  ];

  addNewCategory(): void {
    this.productCategories.push({
      name: this.newProductCategoryName.trim(),
      id: this.productCategories.length.toString(),
      products: [],
    });
    this.newProductCategoryName = '';
  }
}
