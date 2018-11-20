import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
  constructor(private configCarousel: NgbCarouselConfig) { }

  ngOnInit() {
    this.configSlide();
  }

  configSlide(){
    this.configCarousel.interval = 3000;
    this.configCarousel.wrap = true;
    this.configCarousel.keyboard = false;
    this.configCarousel.pauseOnHover = false;
  }
}
