import { ShopService } from "./../shop.service";
import { IProduct } from "./../../shared/models/products";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements OnInit {
  faMinusCircle = faMinusCircle;
  faPlusCircle = faPlusCircle
  product: IProduct;

  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct() {
    this.shopService.getProduct(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(
      (product) => {
        this.product = product;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
