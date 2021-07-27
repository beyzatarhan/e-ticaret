import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { ProductAddFormsComponent } from './product/product-add-forms/product-add-forms.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path:'products',component: ProductComponent},
  {path:'product-add',component: ProductAddFormsComponent, canActivate:[LoginGuard]},
  {path:'login',component: LoginComponent},
  {path:'cart', component:CartComponent},
  {path:'contact',component:ContactComponent},
  //kullanici bir şey yazmadıysa path olarak products ı yaz
  {path:'', redirectTo:'products', pathMatch:'full'},

  //categoryId'si dinamik bir yapı olması gerek so : konuldu
  {path:'products/category/:categoryId', component:ProductComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
