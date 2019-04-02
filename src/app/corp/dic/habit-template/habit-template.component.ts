import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {School} from '../../../entity/School';
import {SchoolService} from '../../../shared/service/basemsg/school.service';
import {UserService} from '../../../shared/user.service';
import {NzModalService} from 'ng-zorro-antd';
import {flatMap, map} from 'rxjs/operators';
import {Habit} from '../../../entity/Habit';
import {HabitService} from '../../../shared/service/basemsg/habit.service';

@Component({
  selector: 'app-habit-template',
  templateUrl: './habit-template.component.html',
  styleUrls: ['./habit-template.component.css']
})
export class HabitTemplateComponent implements OnInit {
  habitWinOrder$: Subject<{nowState: string , habit: Habit}> ;
  user = this.usersvr.getUserStorage();
  habitArray$: Observable<Array<Habit>>;

  queryParams = {
    habitName : '',
    habitClass : ''
  };
  constructor(private habitsvr: HabitService, private usersvr: UserService, private modalService: NzModalService) { }

  ngOnInit() {
  }

  onQuery = () => {
    this.habitArray$ = this.habitsvr.habitList(this.queryParams);
  }


  onRegist = () => {
    this.habitWinOrder$.next({nowState: 'add', habit: null});
  }
  onEdit = (habit: Habit) => {
    this.habitWinOrder$.next({nowState: 'edit', habit});
  }
  onSaved = (habit: Habit) => {
    this.habitArray$ = this.schoolsvr.schoolList(this.queryParams);
  }
  onDelete = (habit: Habit) => {
    this.modalService.confirm({
      nzTitle: '<i>提示</i>',
      nzContent: '<b>确定删除该数据吗?</b>',
      nzOnOk: () => {
        this.habitArray$ =  this.habitsvr.deleteHabit(habit).pipe(
          flatMap(re => this.habitsvr.habitList(this.queryParams))
        ).pipe(
          map( re => {
            this.total = re.total;
            return re.list ;
          })
        );
      }
    });
  }
}
