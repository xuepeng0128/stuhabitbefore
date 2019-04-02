import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {combineLatest, iif, Subject} from 'rxjs';
import {School} from '../../../entity/School';
import {SchoolService} from '../../../shared/service/basemsg/school.service';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {EmployeeService} from '../../../shared/service/system/employee.service';
import {DistrictService} from '../../../shared/service/baseapi/district.service';
import {isNullOrUndefined} from 'util';
import {MSG_SAVE_ERROR, MSG_SAVE_SUCCESS} from '../../../shared/SysMessage';
import {Habit} from '../../../entity/Habit';
import {HabitService} from '../../../shared/service/basemsg/habit.service';
import {ISupUploadfiles} from '../../../shared/interface/ISupUploadfiles';

@Component({
  selector: 'app-win-habit',
  templateUrl: './win-habit.component.html',
  styleUrls: ['./win-habit.component.css']
})
export class WinHabitComponent implements OnInit {
  @Input() habitWinOrder$: Subject<{nowState: string , habit: Habit}> ;
  @Output() onHabitSaved: EventEmitter<Habit> = new EventEmitter<Habit>();

  uploadFilePath = '';


  currentHabit: Habit = new Habit({});
  isHabitModalShow = false;
  nowState = 'browse';

  picFileList = [];
  videoFileList = [];
  audioFileList = [];

  previewImage = '';
  previewVideo = '';
  previewAudio = '';

  previewImgVisible = false;
  previewVideoVisible = false;
  previewAudioVisible = false;

  constructor(private habitsvr: HabitService, private message: NzMessageService) { }


  handleImgPreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewImgVisible = true;
    this.currentHabit.picUrl = this.previewImage;
  }

  handleVideoPreview = (file: ISupUploadfiles) => {
    this.previewVideo = file.url || file.thumbUrl ||  file.base64Data;
    this.previewVideoVisible = true;
    this.currentHabit.vedioUrl = this.previewVideo;
  }

  handleAudioPreview = (file: ISupUploadfiles) => {
    this.previewAudio = file.url || file.thumbUrl ||  file.base64Data;
    this.previewAudioVisible = true;
    this.currentHabit.audioUrl = this.previewAudio;
  }



  ngOnInit() {
    this.habitWinOrder$.subscribe(re => {
      if (re.nowState === 'add') {
        this.currentHabit = new Habit({});
      } else if (re.nowState === 'edit') {
        this.currentHabit = re.habit;
      }
    });
  }

  onSave = () => {

          iif (  () => this.nowState === 'add' ,
                            this.habitsvr.insertHabit(this.currentHabit),
                            this.habitsvr.updateHabit(this.currentHabit)
              ).subscribe(
                        re => {
                                if (!isNullOrUndefined(re)) {
                                  this.message.create('success', MSG_SAVE_SUCCESS);
                                  this.onHabitSaved.emit(re);
                                  this.isSchoolModalShow = false;
                                } else {
                                  this.message.create('error', MSG_SAVE_ERROR);
                                }
                         });
  }
}
