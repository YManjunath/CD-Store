import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [{
    path:'', component: DashboardComponent, children:[
      {path:'products', component:ProductsComponent},
      {path:'cart', component:CartComponent},
      {path:'', redirectTo:'/admin/products', pathMatch:'full'},
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
