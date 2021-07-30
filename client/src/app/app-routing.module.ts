import { ProductDetailsComponent } from "./shop/product-details/product-details.component";
import { ShopComponent } from "./shop/shop.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./core/not-found/not-found.component";
import { ErrorTestComponent } from "./core/error-test/error-test.component";
import { ServerErrorComponent } from "./core/server-error/server-error.component";

const routes: Routes = [
  { path: "", component: HomeComponent, data: {breadcrumb: 'Home'} },
  { path: "test-errors", component: ErrorTestComponent, data: {breadcrumb: 'Test Errors'}  },
  { path: "not-found", component: NotFoundComponent, data: {breadcrumb: 'Not Found'}  },
  { path: "server-error", component: ServerErrorComponent, data: {breadcrumb: 'Server Error'}  },
  { path: "shop", loadChildren: () => import('./shop/shop-routing.module').then(m => m.ShopRoutingModule), data: {breadcrumb: 'Shop'}  },
  { path: "**", redirectTo: "not-found", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
