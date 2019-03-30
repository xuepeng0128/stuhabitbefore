import {Employee} from './Employee';
import {School} from './School';
import {Teacher} from './Teacher';
import {Menu} from './Menu';

export class User {
  account: string; // 账号
  passWord: string; // 密码
  employee: Employee; // 员工用户(为空，非员工用户)
  teacher: Teacher;  // 老师用户
  isSupperAdmin: boolean; // 是否超级管理员
  isAdmin: boolean; // 是否学校，机构管理员
  manageSchool: School; // 管理员或老师所在学校
  powerMenu: Menu;


  constructor(options: {account?: string, passWord?: string, employee?: Employee,
                        teacher?: Teacher, isSupperAdmin?: boolean, isAdmin?: boolean,
                    manageSchool?: School, powerMenu?: Menu}= {}) {
    this.account = options.account || '';
    this.passWord = options.passWord || '';
    this.employee = options.employee ;
    this.teacher = options.teacher ;
    this.isSupperAdmin = options.isSupperAdmin;
    this.isAdmin = options.isAdmin;
    this.manageSchool = options.manageSchool;
    this.powerMenu = options.powerMenu;
  }
}
