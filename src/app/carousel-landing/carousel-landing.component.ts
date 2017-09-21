import {Component, OnInit} from '@angular/core';

declare let $:any;

@Component({
  selector: 'app-carousel-landing',
  templateUrl: './carousel-landing.component.html',
  styleUrls: ['./carousel-landing.component.css']
})
export class CarouselLandingComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    setInterval(function () {
      $('.carousel.carousel-slider').carousel('next')
    }, 6000);
  }

}
