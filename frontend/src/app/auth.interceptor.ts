import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  intercept(req: HttpRequest<unknown>,next:HttpHandler): Observable<HttpEvent<unknown>>
  {
    if (typeof localStorage !== 'undefined')
    {
      const token = localStorage.getItem('token');
      if(token)
      {
        req = req.clone({
        setHeaders:
        {
          Authorization:`Bearer ${token}`
        }
        });
      }

    }
  
   return next.handle(req)
}
}