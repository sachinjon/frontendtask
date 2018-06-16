import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  url:string="https://jsonplaceholder.typicode.com/";
  constructor(private http:Http) { }

  user(param):any{
    console.log("param:"+param);
    return this.http.get(this.url+param)
    .map((val:Response)=> val.json());
  }

}
