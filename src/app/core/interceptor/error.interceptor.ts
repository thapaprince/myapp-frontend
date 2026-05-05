import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {


  constructor(private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = "something went wrong"
        // 1) client side error
        if (error.error instanceof ErrorEvent) {
          errorMessage = error.error.message; // Internet off, DNS issue, CORS blocked, Request blocked (HTTPS issue etc.), WiFi disconnect, Server unreachable
        }
        // 2) server side error
        else {
          switch (error.status) {
            case 400:
              errorMessage = "Bad Request"
              break;

            case 401:
              errorMessage = "Unauthorized - Please login again";
              sessionStorage.removeItem('token');
              this.router.navigate(['/login']);
              break

            case 404:
              errorMessage = 'API Not Found';
              break;

            case 500:
              errorMessage = 'Internal Server Error';
              break;

            default:
              errorMessage = error.message || 'Unknown error occurred';
          }
        }
        // return throwError(() => error);
        return throwError(() => ({
          status: error.status,
            message: errorMessage,
              details: error.error
        }))
      })
    );
  }
}
