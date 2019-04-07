import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../entity/User';
import {flatMap} from 'tslint/lib/utils';
import {UserService} from '../../shared/user.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  user: User = new User();
  loading = false;
  constructor(private message: NzMessageService, private usersvr: UserService,
              private router: Router ) { }

  ngOnInit() {
  }
  onLogin = () => {
    this.loading = true;
    this.usersvr.onvalidateLogin(this.user).subscribe(user => {
        if (user) {
          this.user = user;
          this.usersvr.setUserStorage(user);
          this.router.navigate(['/']);
        } else {
          this.loading = false;
          this.message.create('error', '用户名或密码错误!');
        }
      }
    );
  }

}
