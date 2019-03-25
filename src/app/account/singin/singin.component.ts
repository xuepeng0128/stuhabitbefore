import { Component, OnInit } from '@angular/core';
import {User} from '../../entity/User';
import {UserService} from '../../shared/service/user.service';
import {Router} from '@angular/router';
import {EMPTY, interval, Observable, of} from 'rxjs';
import {delay, flatMap, map, take} from 'rxjs/operators';
import {UserStorageService} from '../../shared/service/baseapi/user-storage.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  user: User = new User();
  loading = false;
  constructor(private message: NzMessageService, private usersvr: UserService, private router: Router, private userstorage: UserStorageService ) { }

  ngOnInit() {
  }
  onLogin = () => {
    this.loading = false;
    this.usersvr.validateLogin(this.user).subscribe(user => {
        if (user) {
          this.user = user;
          this.userstorage.Set(user);
          this.router.navigate(['/']);
        } else {
          this.loading = false;
          this.message.create('error', '用户名或密码错误!');
        }
      }
    );
  }

}
