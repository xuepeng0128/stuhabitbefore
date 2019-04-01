export class TeacherDuty {
  teacherDutyId : string;
  teacherDutyName : string;
  isMaster :boolean;


  constructor(options:{teacherDutyId?: string, teacherDutyName?: string, isMaster?: boolean}={}) {
    this.teacherDutyId = options.teacherDutyId || '';
    this.teacherDutyName = options.teacherDutyName || '';
    this.isMaster = options.isMaster || false;
  }
}
