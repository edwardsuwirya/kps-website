/**
 * Created by BERTY LT on 8/17/2017.
 */
import {Component, OnInit} from "@angular/core";
declare let $:any;
@Component({
  selector: 'prdct-sl3',
  templateUrl: 'prdct-sl3.html',
  styleUrls: ['prdct-sl3.css']
})
export class ProductSl3Component implements OnInit {
  ngOnInit(){
    $(document).ready(function(){
      $('.slider').slider();
    });
  }
}
