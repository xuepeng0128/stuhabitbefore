export class Habit {
  habitId: string;
  habitName: string;
  habitClass: string ; // (1,德2.智3.体4.美5.劳)
  memo: string ; // 文本描述
  vedioUrl: string ; // 视频
  audioUrl: string; // 音频
  picUrl: string;

  constructor(options: {habitId?: string, habitName?: string, habitClass?: string, memo?: string, vedioUrl?: string, audioUrl?: string, picUrl?: string} = {}) {
    this.habitId = options.habitId || '';
    this.habitName = options.habitName || '';
    this.habitClass = options.habitClass || '1';
    this.memo = options.memo || '';
    this.vedioUrl = options.vedioUrl || '';
    this.audioUrl = options.audioUrl || '';
    this.picUrl = options.picUrl || '';
  }
}
