import {AfterViewInit, Component, OnInit} from '@angular/core';

import {HttpService} from '../../shared/service/baseapi/http.service';
import {UserService} from '../../shared/user.service';
import {User} from '../../entity/User';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit, AfterViewInit {
  loading=false;
  user: User = this.usersvr.getUserStorage();
  pareMenuName = '';
  subMenuName = '';
  clientHeight: number = document.documentElement.clientHeight - 200; // 客户区高度
  constructor( private httpsvr: HttpService, private usersvr: UserService) { }

  ngOnInit() {
  }
 ngAfterViewInit() {
      setTimeout(() => {
        this.httpsvr.pageLoading$.subscribe(value => this.loading = value);
      }, 100);

 }
}
