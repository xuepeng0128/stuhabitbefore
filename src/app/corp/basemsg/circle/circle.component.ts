import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Circle} from '../../../entity/Circle';
import {UserService} from '../../../shared/user.service';
import {User} from '../../../entity/User';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {
  user: User = this.usersvr.getUserStorage();
  queryParams = {
    schoolstyle : '0', // 1.全日制学校,2.培训学校
    schoolName : '',
    circleName : '',
    buildMan : '',
    buildDateBegin : '',
    buildDateEnd : '',
    queryManId : this.user.isSupperAdmin ?  '' : (this.user.employee.duty.) ,
    pageSize : 20,
    pageNo : 1,
    getTotal : '1'
  };
  circleList$: Observable<Array<Circle>> = new Observable<Array<Circle>>();
  constructor(private usersvr: UserService) { }

  ngOnInit() {
  }

  onCloseCircle = (circle: Circle) => {
    // this.modalService.confirm({
    //   nzTitle: '<i>提示</i>',
    //   nzContent: '<b>确定删除该数据吗?</b>',
    //   nzOnOk: () => {
    //     this.schoolList$ =  this.schoolsvr.deleteSchool(school).pipe(
    //       flatMap(re => this.schoolsvr.schoolList(this.queryParams))
    //     ).pipe(
    //       map( re => {
    //         this.total = re.total;
    //         return re.list ;
    //       })
    //     );
    //   }
    // });
  }
}
