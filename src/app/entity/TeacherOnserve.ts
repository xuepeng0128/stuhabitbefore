import {School} from './School';

export class TeacherOnserve {
  school: School; // 任教学校
  grade: number;  // 年纪
  classes: number; // 班级
  rank: string ; // 职务

  constructor(options: {school?: School, grade?: number, classes?: number, rank?: string}= {}) {
    this.school = options.school;
    this.grade = options.grade;
    this.classes = options.classes;
    this.rank = options.rank;
  }
}
