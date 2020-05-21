import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductDescriptionComponent } from './product.description.component';
import { ProductDetailComponent } from './product.detail.component';
import { SellerInfoComponent } from './seller.info.component';

const routes: Routes = [
  { path: '',            component: HomeComponent },
  { path: 'product/:id', component: ProductDetailComponent,
    children: [
      { path: '',           component: ProductDescriptionComponent },
      { path: 'seller/:id', component: SellerInfoComponent }
    ]
  }
];

export const routing = RouterModule.forRoot(routes);
