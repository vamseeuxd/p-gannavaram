import {NgModule} from '@angular/core';
import {NbAccordionModule, NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule} from '@nebular/theme';
import {Ng2SmartTableModule} from 'ng2-smart-table';

import {ThemeModule} from '../../@theme/theme.module';
import {ProductsRoutingModule, routedComponents} from './products-routing.module';
import {NgPipesModule} from 'ngx-pipes';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    NbAccordionModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    ProductsRoutingModule,
    Ng2SmartTableModule,
    NgPipesModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ProductsModule {
}
