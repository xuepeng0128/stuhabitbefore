import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
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
  habitWinOrder$: Subject<{nowState: string , habit: Habit}>= new Subject<{nowState: string , habit: Habit}>() ;
  user = this.usersvr.getUserStorage();
  habitArray$: Observable<Array<Habit>> = new Observable<Array<Habit>>();

  queryParams = {
    habitName : '',
    habitClass : ''
  };
  constructor(private habitsvr: HabitService, private usersvr: UserService,
              private modalService: NzModalService) { }

  ngOnInit() {
  }

  onQuery = () => {
    this.habitArray$ = this.habitsvr.habitTemplateList(this.queryParams);
  }


  onAdd = () => {
    this.habitWinOrder$.next({nowState: 'add', habit: null});
  }
  onEdit = (habit: Habit) => {
    this.habitWinOrder$.next({nowState: 'edit', habit});
  }
  onSaved = (habit: Habit) => {
    this.habitArray$ = this.habitsvr.habitTemplateList(this.queryParams);
  }
  onDelete = (habit: Habit) => {
    this.modalService.confirm({
      nzTitle: '<i>提示</i>',
      nzContent: '<b>确定删除该数据吗?</b>',
      nzOnOk: () => {
        this.habitArray$ =  this.habitsvr.deleteTemplateHabit(habit).pipe(
          flatMap(re => this.habitsvr.habitTemplateList(this.queryParams))
        );
      }
    });
  }
}
