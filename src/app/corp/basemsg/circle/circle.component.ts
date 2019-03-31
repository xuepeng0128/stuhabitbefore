import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  queryParams ={
    schoolName : '',
    circleName :'',
    pageSize : 20,
    pageNo :1,
    getTotal : '1' 
  }
  circleList$ : Observable<Array<Circle>>
  constructor() { }

  ngOnInit() {
  }

}
