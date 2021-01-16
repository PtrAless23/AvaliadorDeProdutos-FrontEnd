import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AlertComponent } from './alert/alert.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductRatingsListComponent } from './product-ratings-list/product-ratings-list.component';
import { ProductRatingsFormComponent } from './product-ratings-form/product-ratings-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsFormComponent,
    MenuComponent,
    NotFoundComponent,
    AlertComponent,
    HeaderComponent,
    FooterComponent,
    ProductRatingsListComponent,
    ProductRatingsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
