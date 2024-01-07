import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: [
    './shop-details.component.scss',
    "../../assets/css/bootstrap.min.css",
    "../../assets/css/font-awesome.min.css",
    "../../assets/css/elegant-icons.css",
    "../../assets/css/magnific-popup.css",
    "../../assets/css/nice-select.css",
    "../../assets/css/owl.carousel.min.css",
    "../../assets/css/slicknav.min.css",
    "../../assets/css/style.css",
  ]
})
export class ShopDetailsComponent implements OnInit {
  productId: string = '';  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id')|| '';
    console.log(this.productId)
  }
}
