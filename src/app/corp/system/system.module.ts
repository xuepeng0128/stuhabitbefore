import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { EmployeeMgrComponent } from './employee-mgr/employee-mgr.component';
import { UserMgrComponent } from './user-mgr/user-mgr.component';
import { SchoolAdminMgrComponent } from './school-admin-mgr/school-admin-mgr.component';
import { PowerMgrComponent } from './power-mgr/power-mgr.component';
import {ChangePasswordComponent} from './change-password/change-password.component';

@NgModule({
  declarations: [EmployeeMgrComponent, UserMgrComponent, SchoolAdminMgrComponent,
    PowerMgrComponent, ChangePasswordComponent, SchoolAdminMgrComponent],
  imports: [
    CommonModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
