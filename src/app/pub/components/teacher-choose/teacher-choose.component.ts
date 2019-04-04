import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Teacher} from '../../../entity/Teacher';
import {TeacherService} from '../../../shared/service/basemsg/teacher.service';
import {UserService} from '../../../shared/user.service';
import {User} from '../../../entity/User';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-teacher-choose',
  templateUrl: './teacher-choose.component.html',
  styleUrls: ['./teacher-choose.component.css']
})
export class TeacherChooseComponent implements OnInit {
  user: User = this.usersvr.getUserStorage();
  @Input() singleChoose = true;
  @Output() onTeacherChoosed: EventEmitter<Teacher|Array<Teacher>> = new EventEmitter<Teacher | Array<Teacher>>();
  isTeacherChooseModalShow = false;
  teacherList$: Observable<Array<MultiChooseTeacher>> = new Observable<Array<MultiChooseTeacher>>() ;
  total = 0;
  entFilter = '';
  queryParams = {
    schoolId : this.user.manageSchool.schoolId
  };
  constructor(private teachersvr: TeacherService, private usersvr: UserService) { }

  ngOnInit() {
  }

  onQuery = () => {
    this.teacherList$ = this.teachersvr.teacherList(this.queryParams).pipe(
      map(re => {
        return re.list as Array<MultiChooseTeacher>;
      })
    );
  }
}

export class MultiChooseTeacher extends Teacher {
       choosed: boolean;

  constructor(choosed?: boolean) {
    super({});
    this.choosed = choosed || false;
  }
}
