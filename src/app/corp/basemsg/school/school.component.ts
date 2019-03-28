import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {School} from '../../../entity/School';
import {SchoolService} from '../../../shared/service/basemsg/school.service';
import {UserService} from '../../../shared/user.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  user = this.usersvr.getUserStorage();
  schoolList$: Observable<Array<School>>;
  total = 0;
  queryParams = {
     schoolId : '',
    schoolName : '',
    districtId : '',
     address : '',
     employeeName : '',
    pageSize : 20,
    pageNo : 1,
    getTotal : '1'
  };
  constructor(private schoolsvr: SchoolService, private usersvr: UserService) { }

  ngOnInit() {
  }

  onQuery = () => {
    this.queryParams.getTotal = '1';
    this.schoolList$ = this.schoolsvr.schoolList(this.queryParams).pipe(
      map( re => {
        this.total = re.total;
        return re.list ;
      })
    );
  }
  onPageChange = (e) => {
    this.queryParams.pageNo = e;
    this.queryParams.getTotal = '0';
    this.schoolList$ = this.schoolsvr.schoolList(this.queryParams).pipe(
      map( re => re.list)
    );
  }



}
