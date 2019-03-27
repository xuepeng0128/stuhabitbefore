import {TeacherOnserve} from './TeacherOnserve';

export class Teacher {
    paperId: string; // 身份证
    tel: string ; // 电话
    teacherName: string ; // 老师姓名
    rank: string ; // 当前职务
    onserve: TeacherOnserve; // 当前任教
    constructor(options: {paperId?: string, tel?: string, teacherName?: string, rank?: string, onserve?: TeacherOnserve}= {}) {
      this.paperId = options.paperId || '';
      this.tel = options.tel || '';
      this.teacherName = options.teacherName || '';
      this.rank = options.rank || '';
      this.onserve = options.onserve || null;
    }
}
