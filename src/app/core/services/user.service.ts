import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

import { User } from '../models/auth.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endPoint:string="";
  constructor(private api:ApiService) { }

  getUser(id:number):Observable<User[]>{

    this.endPoint="/get/user";
   return  this.api.get<any>(this.endPoint).pipe(

   // map(res => res.data.find((user: any) => user.id === id)) //implicit return

    map(res=>{
     return res.data.find((user:any)=>{
      return user.id === id
    })
  }) // explicit return

   );

  }

  getUserBYId(id:number | string):Observable<User>{
    this.endPoint="/users";
    return this.api.getById<User>(this.endPoint,id);

  }
  getSelectedUser() {
  return JSON.parse(sessionStorage.getItem('user') || '{}');
}

// editUser by id
}
