export class Student {
  paperId: string;
  studentName: string;
  tel: string;


  constructor(options: {paperId?: string, studentName?: string, tel?: string}= {}) {
    this.paperId = options.paperId || '';
    this.studentName = options.studentName || '';
    this.tel = options.tel || '';
  }
}
