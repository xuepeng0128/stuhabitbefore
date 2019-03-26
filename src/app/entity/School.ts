import {City} from './City';
import {District} from './District';
import {Employee} from './Employee';
import {Classes} from './Classes';

export class School {
   schoolId : string; // 学校编号
   schoolName : string ; // 学校名称
   city : City; // 市
   district : District; // 区
   longitude : number; // 经度坐标
    latitude : number ; // 纬度坐标
    address : number; // 地址
    classes : Array<Classes>;  // 当前班级
   saleMans : Employee; // 业务员
}
