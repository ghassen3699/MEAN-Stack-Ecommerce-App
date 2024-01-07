import { Component } from '@angular/core';

@Component({
  selector: 'app-home-show',
  templateUrl: './home-show.component.html',
  styleUrls: [
    './home-show.component.scss',
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
export class HomeShowComponent {
  imagePaths: { [key: string]: string } = {
    "1":"../../assets/img/hero/hero-1.jpg",
      "2":'../../assets/img/hero/hero-2.jpg',
      "3":"../../assets/img/product/product-1.jpg",
      "4":"../../assets/img/product/product-2.jpg",
      "5":"../../assets/img/product/product-3.jpg",
      "6":"../../assets/img/product/product-4.jpg",
      "7":"../../assets/img/product/product-5.jpg",
      "8":"../../assets/img/product/product-6.jpg",
      "9":"../../assets/img/product/product-7.jpg",
      "10":"../../assets/img/product/product-8.jpg",
  };
  getBackgroundImagePath(): { [key: string]: string } {
    return this.imagePaths;
  }
}
