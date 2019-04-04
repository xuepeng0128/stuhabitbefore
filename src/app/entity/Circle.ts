import { School } from './School';
import { Teacher } from './Teacher';
import { Student } from './Student';
import {TrainSchool} from './TrainSchool';
import {Classes} from './Classes';

export class Circle {
    circleId : string ;
   circleName : string;
     school : School;
     trainSchool : TrainSchool;
      classes: Classes;
     buildMan : Teacher; // 创建人
     buildDate : Date; // 创建日期
     teachers : Array<Teacher> ;// 圈内老师
     students : Array<Student>; // 圈内学生
     endDate : Date; // 圈子关闭时间
     closeReason : string ; // 关闭原因
     closeMan : string;


}
