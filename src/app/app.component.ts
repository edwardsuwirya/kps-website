import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  value: number = 1;

  constructor() {
  }
  OnButtonClick(value)
  {
    this.value=value
  }

  ngOnInit() {
  }
}
