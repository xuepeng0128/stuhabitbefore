import {School} from './School';
import {Student} from './Student';

export class Classes {
  id: string ;
  grade: number;  // 年纪
  classes: number; // 班级
  school: School; // 所属学校
  students: Array<Student>; // 班级学生


  constructor(options: {id: string, grade: number, classes: number, school: School, students: Array<Student>}= {}) {
    this.id = options.id || '';
    this.grade = options.grade;
    this.classes = options.classes;
    this.school = options.school || null;
    this.students = options.students;
  }
}
