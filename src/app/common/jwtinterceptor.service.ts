import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../login/authentification.service';


export function JWTInterceptorService(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const authentService=inject(AuthentificationService);
  const jwt= authentService.jwtToken;
  const clone =req.clone({setHeaders:{Authorization: `Bearer ${jwt}`}})
  return next(clone);
  
}
