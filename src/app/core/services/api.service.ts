import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs'; // rxjs operators

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = 'http://localhost:3000/api' // backend url

  constructor(private http: HttpClient) { } // inject

  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${endpoint}`, body);
  }

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${endpoint}`);
  }

  getAll<T>(endpoint: string, params?: any) {
    // let httpParams = new HttpParams({ fromObject: params || {} }) // without set method

    let httpParams = new HttpParams();


    if (params?.page) {
      httpParams = httpParams.set('page', params.page);
    }

    if (params?.limit) {
      httpParams = httpParams.set('limit', params.limit);
    }

    if (params?.search) {
      httpParams = httpParams.set('search', params.search);
    }

    return this.http.get<T[]>(
      `${this.baseUrl}/${endpoint}`,
      { params: httpParams }
    );
  }

  patch<T>(endpoint: string, body: any): Observable<T> {
    return this.http.patch<T>(`${this.baseUrl}${endpoint}`, body); // id append already in endpint from services or component 
    // and inside body sending only particular field as a object

  }

  put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}${endpoint}`, body); // id append already in endpint from services or component 
    // and inside body sending whole field as a object never ignore any one field also otherwise in db is save this field as a null
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}${endpoint}`) // id append already in endpint 
    // from services or component not needed for all data of body
  }

  getById<T>(endpoint: string, id: number | string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${endpoint}/${id}`);
  }


}
