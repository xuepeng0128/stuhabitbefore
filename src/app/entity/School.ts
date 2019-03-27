import {City} from './City';
import {District} from './District';
import {Employee} from './Employee';

export class School {
   schoolId: string; // 学校编号
   schoolName: string ; // 学校名称
   city: City; // 市
   district: District; // 区
   longitude: number; // 经度坐标
    latitude: number ; // 纬度坐标
    address: string; // 地址
   saleMans: Employee; // 业务员

  constructor(options: {schoolId?: string, schoolName?: string, city?: City, district?: District,
                         longitude?: number, latitude?: number, address?: string, saleMans?: Employee}= {}) {
    this.schoolId = options.schoolId || '';
    this.schoolName = options.schoolName || '';
    this.city = options.city || null;
    this.district = options.district || null;
    this.longitude = options.longitude;
    this.latitude = options.latitude;
    this.address = options.address || '';
    this.saleMans = options.saleMans;
  }
}
