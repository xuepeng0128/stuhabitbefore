import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Classes} from '../../../entity/Classes';
import {School} from '../../../entity/School';
import {UserService} from '../../../shared/user.service';
import {ClassesService} from '../../../shared/service/basemsg/classes.service';
import {CommonService} from '../../../shared/common.service';

@Component({
  selector: 'app-school-classes',
  templateUrl: './school-classes.component.html',
  styleUrls: ['./school-classes.component.css']
})
export class SchoolClassesComponent implements OnInit {
  user = this.usersvr.getUserStorage();
  classesWinOrder$: Subject<{nowState: string , classes: Classes}> = new Subject<{nowState: string , classes: Classes}>() ;
  classesArray$: Observable<Array<Classes>> = new Observable<Array<Classes>>();
  queryParams = {
    grade : '',
    classes : '' ,
    schoolId : this.user.teacher.onserve.school.schoolId,
    headmasterName : ''
  };
  constructor(private usersvr: UserService, private classessvr: ClassesService, public  commonsvr: CommonService) { }

  ngOnInit() {
  }
  onQuery = () => {
    this.classesArray$ = this.classessvr.schoolClassesList(this.queryParams);
  }
}
