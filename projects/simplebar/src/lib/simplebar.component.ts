import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jp-simplebar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class SimplebarComponent implements OnInit {

  @Input()
  public imageUrl:string

  @Input()
  public title:string
  
  constructor() { }

  ngOnInit() {
  }

}
