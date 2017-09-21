/**
 * Created by BERTY LT on 8/17/2017.
 */
import {Component, OnInit} from "@angular/core";
declare let $:any;
@Component ({
  selector:'prdct-sl4',
  templateUrl:'prdct-sl4.html',
  styleUrls: ['prdct-sl4.css']
})
export class ProductSl4Component implements OnInit{

  ngOnInit(){
    $(document).ready(function(){
      $('.slider').slider();
    });
  }
}
