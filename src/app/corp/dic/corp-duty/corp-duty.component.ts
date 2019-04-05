import { Component, OnInit } from '@angular/core';
import { CorpDuty } from 'src/app/entity/CorpDuty';
import { UserService } from 'src/app/shared/user.service';
import { CorpdutyService } from 'src/app/shared/service/dic/corpduty.service';
import {iif} from 'rxjs/internal/observable/iif';
import {User} from '../../../entity/User';
import {flatMap, map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-corp-duty',
  templateUrl: './corp-duty.component.html',
  styleUrls: ['./corp-duty.component.css']
})
export class CorpDutyComponent implements OnInit {
  user: User = this.usersvr.getUserStorage();
  isCorpDutyModalShow = false;
  corpdutyArray: Array<CorpDuty> = new Array<CorpDuty>();
  currentCorpDuty: CorpDuty = new CorpDuty({});
  editState = 'browse';
  constructor(private usersvr: UserService, private corpdutysvr: CorpdutyService) { }

  ngOnInit() {
  }
  onQuery = () => {
      this.corpdutysvr.corpDutyList().subscribe(re => {
        this.corpdutyArray = re;
     });
  }
  onAdd = () => {
     this.editState = 'add';
     this.currentCorpDuty = new CorpDuty({});
     this.isCorpDutyModalShow = true;
  }
  onEdit = (corpDuty: CorpDuty) => {
    this.currentCorpDuty = corpDuty;
    this.editState = 'edit';
    this.isCorpDutyModalShow = true;
  }
  onSave = () => {
    iif(
      () => this.editState === 'add',
          this.corpdutysvr.insertCorpDuty(this.currentCorpDuty),
          this.corpdutysvr.updateCorpDuty(this.currentCorpDuty)
    ).subscribe(re => this.isCorpDutyModalShow = false);
  }
  onDelete = (corpDuty: CorpDuty) => {
     this.corpdutysvr.deleteCorpDuty(corpDuty).pipe(
      switchMap(() => this.corpdutysvr.corpDutyList())
     ).subscribe( re => {
         this.corpdutyArray = re ;
     });
  }
}
