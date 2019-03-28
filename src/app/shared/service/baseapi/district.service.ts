import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {Observable, of} from 'rxjs';
import {District} from '../../../entity/District';
import {City} from '../../../entity/City';
import {flatMap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  constructor(private httpsvr: HttpService) { }
  districtList = (): Observable<Array<District>> => {
     return this.httpsvr.onHttpGet('/api/dic/district/districtList', null);
  }

  cityDistrictList =(): Observable<Array<City>> => {
    // return this.httpsvr.onHttpGet('/api/dic/district/districtList', null).pipe(
    //      flatMap(dlist => of(dlist)),
    //
    // );
    return null;
  }


}
