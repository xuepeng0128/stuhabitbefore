import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {from, Observable, of} from 'rxjs';
import {District} from '../../../entity/District';
import {City} from '../../../entity/City';
import {flatMap, groupBy, map, mergeScan, reduce, takeLast} from 'rxjs/operators';
import {DistrictSelectComponent} from '../../../pub/components/district-select/district-select.component';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  constructor(private httpsvr: HttpService) { }
  districtList = (): Observable<Array<District>> => {
     return this.httpsvr.onHttpGet('/api/dic/district/districtList', null);
  }

  singleDistrict = (districtId: string): Observable<District> => {
    return this.httpsvr.onHttpGet('/api/dic/district/singleDistrict', {districtId});
  }
  cityDistrictList = (): Observable<Array<City>> => {
    return this.httpsvr.onHttpGet('/api/dic/district/districtList', null).pipe(
         flatMap((dlist: Array<District>) => from(dlist)),
        groupBy(
          p => p.city,
          p => p
        ),
      flatMap((group$) =>
        group$.pipe(reduce((acc, cur) => [...acc, cur], [group$.key]))),
      map(  arr => {
           const c: City = new City(arr[0].cityId, arr[0].cityName);
           c.districts = arr.slice(1);
           return City;
      }),
      mergeScan((acc, cur) => of([...acc, cur]), new Array<City>()),
      takeLast(1),
    );
  }


}
