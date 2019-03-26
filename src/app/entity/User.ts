export class User {
  account : string; // 账号
  passWord : string; // 密码
  employee : Employee; // 员工用户(为空，非员工用户)
  teacher : Teacher;  // 老师用户
  isSupperAdmin :boolean; // 是否超级管理员
  isAdmin : boolean; // 是否学校，机构管理员
  manageSchool :School; // 管理员或老师所在学校

  


}
