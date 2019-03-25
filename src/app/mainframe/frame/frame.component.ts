import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Menu} from '../../entity/Menu';
import {MenuService} from '../../system/shared/menu.service';
import {HttpService} from '../../shared/service/baseapi/http.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit, AfterViewInit {
  loading = false;
  menuArray$: Observable<Array<Menu>>; // 菜单
  pareMenuName = '';
  subMenuName = '';
  clientHeight: number = document.documentElement.clientHeight - 200; // 客户区高度
  constructor(private menusvr: MenuService, private httpsvr: HttpService) { }

  ngOnInit() {
     this.menuArray$ = this.menusvr.onQuery({});
  }
 ngAfterViewInit() {
      setTimeout(() => {
        this.httpsvr.pageLoading$.subscribe(value => this.loading = value);
      }, 100);

 }
}
