import { Component, OnInit } from '@angular/core';
import {School} from '../../../entity/School';
import {SchoolService} from '../../../shared/service/basemsg/school.service';
import {NzMessageService} from 'ng-zorro-antd';
import {EmployeeService} from '../../../shared/service/system/employee.service';
import {DistrictService} from '../../../shared/service/baseapi/district.service';
import {combineLatest} from 'rxjs';
import {isNullOrUndefined} from 'util';
import {MSG_SAVE_ERROR, MSG_SAVE_SUCCESS} from '../../../shared/SysMessage';
import {UserService} from '../../../shared/user.service';
import {User} from '../../../entity/User';
import {flatMap} from 'rxjs/operators';

@Component({
  selector: 'app-current-school',
  templateUrl: './current-school.component.html',
  styleUrls: ['./current-school.component.css']
})
export class CurrentSchoolComponent implements OnInit {
  currentSchool: School = (this.usersvr.getUserStorage() as User).teacher.onserve.school;
  isSchoolModalShow = false;
  nowState = 'browse';

  constructor(private schoolsvr: SchoolService, private message: NzMessageService,
              private usersvr: UserService) {
  }

  ngOnInit() {
  }

  onSave = () => {
    // 补全school区，employee
    combineLatest(
      this.districtsvr.singleDistrict(this.currentSchool.district.districtId),
      this.emloyeesvr.singleEmployee(this.currentSchool.saleMan.paperId)
    ).pipe(
      flatMap(
        re => {
          this.currentSchool.saleMan = re[1];
          this.currentSchool.district = re[0];
          return this.schoolsvr.updateSchool(this.currentSchool);
        }
      )).subscribe(
      re => {
        if (!isNullOrUndefined(re)) {
          this.message.create('success', MSG_SAVE_SUCCESS);
          this.onSchoolSaved.emit(re);
          this.isSchoolModalShow = false;
        } else {
          this.message.create('error', MSG_SAVE_ERROR);
        }
      });
  }
}
