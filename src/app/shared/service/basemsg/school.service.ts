import { Injectable } from '@angular/core';
import {HttpService} from '../baseapi/http.service';
import {Observable} from 'rxjs';
import {School} from '../../../entity/School';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private httpsvr : HttpService) { }

  schoolList =(queryparam : any) : Observable<School> =>{
         return this.httpsvr.onHttpGet('',queryparam);
  }

}
