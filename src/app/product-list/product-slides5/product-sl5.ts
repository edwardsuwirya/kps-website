/**
 * Created by BERTY LT on 8/17/2017.
 */
import {Component, OnInit} from "@angular/core";
declare let $:any;
@Component ({
  selector:'prdct-sl5',
  templateUrl:'prdct-sl5.html',
  styleUrls: ['prdct-sl5.css']
})
export class ProductSl5Component implements OnInit{

  ngOnInit(){
    $(document).ready(function(){
      $('.slider').slider();
    });
  }
}
