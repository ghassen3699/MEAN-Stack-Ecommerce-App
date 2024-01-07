import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: [
    './blog.component.scss',
    '../../assets/css/bootstrap.min.css',
    '../../assets/css/elegant-icons.css',
    '../../assets/css/font-awesome.min.css',
    '../../assets/css/magnific-popup.css',
    '../../assets/css/nice-select.css',
    '../../assets/css/owl.carousel.min.css',
    '../../assets/css/slicknav.min.css',
    '../../assets/css/style.css'
  ]
})
export class BlogComponent {

  imagePaths: { [key: string]: string } = {
    "1":"../../assets/img/blog/blog-1.jpg",
      "2":'../../assets/img/blog/blog-2.jpg',
      "3":"../../assets/img/blog/blog-3.jpg",
      "4":"../../assets/img/blog/blog-4.jpg",
      "5":"../../assets/img/blog/blog-5.jpg",
      "6":"../../assets/img/blog/blog-6.jpg",
      "7":"../../assets/img/blog/blog-7.jpg",
      "8":"../../assets/img/blog/blog-8.jpg",
      "9":"../../assets/img/blog/blog-9.jpg",
      "10":"../../assets/img/breadcrumb-bg.jpg",
  };
  getBackgroundImagePath(): { [key: string]: string } {
    return this.imagePaths;
  }

}
