import {Component, OnInit} from "@angular/core";

declare let $:any;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  ngOnInit() {
    $('.collapsible').collapsible();
    $('.modal').modal();
  }
}
