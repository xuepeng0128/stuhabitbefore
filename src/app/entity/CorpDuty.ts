export class CorpDuty {
    corpDutyId: string;
    corpDutyName: string;
    isMaster: boolean;

  constructor(options: {corpDutyId?: string, corpDutyName?: string, isMaster?: boolean}= {}) {
    this.corpDutyId = options.corpDutyId || '' ;
    this.corpDutyName = options.corpDutyName || '';
    this.isMaster = options.isMaster || false;
  }
}
