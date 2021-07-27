import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { AlertifyService } from './services/alertify.service';
import {HttpClientModule} from '@angular/common/http';
import { ProductAddFormsComponent } from './product/product-add-forms/product-add-forms.component';
import { LoginComponent } from './login/login.component'
import { AccountService } from './services/account.service';
import { LoginGuard } from './login/login.guard';
import { CartComponent } from './cart/cart.component';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [		
    AppComponent,
    NavComponent,
    ProductComponent,
    CategoryComponent,
    ProductFilterPipe,
    ProductAddFormsComponent,
    LoginComponent,
    CartComponent,
    ContactComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AlertifyService,
    AccountService,
    LoginGuard,
    ProductService,
    CartService,
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
