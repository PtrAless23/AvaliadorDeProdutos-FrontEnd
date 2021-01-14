import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  item: Product;
  errorFields: string[];
  

  @ViewChild("alert") alert;

  constructor(protected route: ActivatedRoute, protected router: Router, private service: ProductsService) { 
    this.item = new Product();
    this.item.active = true;
    this.errorFields = [];
  }

  ngOnInit(): void {
    let id: string = this.route.snapshot.paramMap.get("id");

    if(id != null){
      this.service.getOne(parseInt(id)).subscribe((data: any) => this.item = data);
    }
  }

  save() {
    this.errorFields = [];

    if(this.item.id) {
      this.service.update(this.item).subscribe(
        (data: any) => this.callbackSuccess(),
        (error: any) => this.callbackError(error)
      );
    } else {
      this.service.insert(this.item).subscribe(
        (data: any) => this.callbackSuccess(),
        (error: any) => this.callbackError(error)
      );
    }
  }

  isInvalidField(field) {
    return (this.errorFields.indexOf(field) != -1);
  }

  private callbackSuccess() {
    this.router.navigate(['/produtos']);
  }

  private callbackError(error: any) {
    console.log(error);

    Object.keys(error.error).map(field => this.errorFields.push(field));
    console.log(this.errorFields);


    this.alert.type = "danger";

    if(error.status == 422) {
      this.alert.message = "Não foi possível salvar o registro. Os campos destacados estão inválidos.";
    } else {
      this.alert.message = "Ocorreu um problema ao salvar o registro.";
    }

  }

}
