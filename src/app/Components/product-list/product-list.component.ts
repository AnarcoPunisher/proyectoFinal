import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductsService, private appservice: AppService) { }

  merchBgimg = '/assets/Resources/merchBg.jpg'

  ngOnInit(): void {
    this.appservice.bgPath.next(this.merchBgimg);
    console.log(this.productService.getProducts());
  }

}
