/**
 * Created by BERTY LT on 8/17/2017.
 */
import {Component, OnInit} from "@angular/core";
declare let $:any;
@Component ({
  selector:'prdct-sl2',
  templateUrl:'prdct-sl2.html',
  styleUrls: ['prdct-sl2.css']
})
export class ProductSl2Component implements OnInit{

  ngOnInit(){
    $(document).ready(function(){
      $('.slider').slider();
    });
  }
}
