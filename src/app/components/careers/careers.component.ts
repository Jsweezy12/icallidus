import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  constructor() { }

  prev;
  prevName;
ngOnInit() {
  this.prevName = localStorage.getItem("prev");
  this.prev = localStorage.getItem("prevRoute");

}
}