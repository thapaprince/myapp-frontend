import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

import { loginRequest, loginResponse } from '../models/auth.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey: string = "token";
  constructor(private api: ApiService) { }

  // login(data:loginRequest):Observable<loginResponse>{

  //   return this.api.post<loginResponse>('/auth/login',data).pipe(
  //     tap(res=>{
  //       console.log("res...",res);
  //       // this.SetToken(res.token)
  //     })
  //   )

  // }

  login(data: loginRequest): Observable<loginResponse> {

    return this.api.post<loginResponse>('/auth/login', data).pipe(
      tap(res => {
        console.log(res, "res:...",)
        this.setToken(res.accessToken);

      })
    )

  }
  setToken(token: string) {
    sessionStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {

    // const token = sessionStorage.getItem(this.tokenKey);
    // if (!token) {
    //   return false;
    // }else{
    // return true;
    // }                    // long way

    return !!this.getToken(); // short way !! convert value true or false

  }
}
