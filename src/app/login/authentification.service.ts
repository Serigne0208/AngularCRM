import { Injectable } from '@angular/core';
import { User } from './model/user';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

const USER_TOKEN = 'user_token';
const JWT_TOKEN = 'jwt_token'
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private user?: User;
  private jwt?: string;

  constructor(private http: HttpClient) {
    if (sessionStorage.getItem(USER_TOKEN)) {
      this.user = JSON.parse(sessionStorage.getItem(USER_TOKEN)!);
      this.jwt = sessionStorage.getItem(JWT_TOKEN)!;
    }
  }

  get authenticated(): boolean {
    return !!this.user;
  }

  get jwtToken(): string | undefined {
    return this.jwt;
  }

  disconnect(): void {
    this.user = undefined;
    this.jwt = '',
      sessionStorage.clear();
  }

  authentUser(login: string, password: string): Observable<User> {
    return this.http.post<AuthentResp>('/api/auth/login', { email: login, password: password }).pipe(
      map((resp: AuthentResp) => {
        this.user = resp.user;
        this.jwt = resp.token;
        sessionStorage.setItem(USER_TOKEN, JSON.stringify(this.user));
        sessionStorage.setItem(JWT_TOKEN, this.jwt);
        return this.user;
      })
    )
    // this.user={
    //   id:1,
    //   login: login,
    //   firstname:'John',
    //   lastname:'Doe'
    // }
    // sessionStorage.setItem(USER_TOKEN, JSON.stringify(this.user));
    // return this.user;
  }
}

interface AuthentResp {
  user: User,
  token: string
}