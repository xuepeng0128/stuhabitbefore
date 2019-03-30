import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Student} from '../../../entity/Student';
import {StudentService} from '../../../shared/service/basemsg/student.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentList$: Observable<Array<Student>> = new Observable<Array<Student>>() ;
  total = 0;
  queryParams = {
    paperId : '',
    studentName : '',
    ageBegin : '' ,
    ageEnd : '',
    pageSize : 20,
    pageNo : 1,
    getTotal : '1'
  };
  constructor(private studentsvr: StudentService) { }

  ngOnInit() {
  }

  onQuery = () => {
    this.queryParams.getTotal = '1';
    this.queryParams.pageNo = 1;
    this.studentList$ = this.studentsvr.studentList(this.queryParams).pipe(
      map(re => {
         this.total = re.total;
         return re.list;
      })
    );
  }

  onPageChange = (e) => {
    this.queryParams.pageNo = e;
    this.queryParams.getTotal = '0';
    this.studentList$ = this.studentsvr.studentList(this.queryParams).pipe(
      map(re => {
        return re.list;
      })
    );
  }






}
