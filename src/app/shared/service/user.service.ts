import { Injectable } from '@angular/core';
import {User} from '../../entity/User';
import {map} from 'rxjs/operators';
import {HttpService} from './baseapi/http.service';
import {Observable} from 'rxjs';
import {webApiUrl} from '../webApiUrl';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpsvr: HttpService) { }

  validateLogin = (user: User): Observable<User> => {
    return this.httpsvr.onHttpPost(webApiUrl.WEBAPI_USER_VALIDATE_LOGIN, user).pipe(
      map(
        res => res.data as User
      )
    );
  }



}
