import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductRating } from '../product-rating';
import { ProductRatingsService } from '../product-ratings.service';

@Component({
  selector: 'app-product-ratings-list',
  templateUrl: './product-ratings-list.component.html',
  styleUrls: ['./product-ratings-list.component.css']
})
export class ProductRatingsListComponent implements OnInit {

  items: ProductRating[];
  product_id: string;

  @ViewChild("alert") alert;

  constructor(protected route: ActivatedRoute, private service: ProductRatingsService) { 
    this.product_id = null;
  }

  ngOnInit(): void {
    this.product_id = this.route.snapshot.paramMap.get('product_id');

    if(this.product_id != null) {
      this.getAll();
    }
  }

  getAll() {
    this.service.getAll(parseInt(this.product_id)).subscribe((data: any) => this.items = data);
  }

  delete(id: number) {
    this.service.delete(parseInt(this.product_id), id).subscribe(
      (data: any) => this.callbackSuccess(data.message),
      (error: any) => this.callbackError(error)
    );
  }

  private callbackSuccess(message: string) {
    this.alert.type = "success";
    this.alert.message = message;
    this.getAll(); 
  }

  private callbackError(error: any) {
    this.alert.type = "danger";
    this.alert.message = "Ocorreu um problema ao excluir o registro";
    console.log(error);
  }

}
