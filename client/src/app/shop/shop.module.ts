import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [ShopComponent, ProductItemComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: []
})
export class ShopModule { }
