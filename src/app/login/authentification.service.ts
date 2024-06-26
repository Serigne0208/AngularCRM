import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }
  authentUser(login:string, password: string): any{
    return{
      id:1,
      login: login,
      firstname:'John',
      lastname:'Doe'
    }
  }
}