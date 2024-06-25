import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup,ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import{MatInputModule} from '@angular/material/input';
import{MatFormField} from '@angular/material/form-field';
import{MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'crm-login',
  standalone: true,
  imports: [ReactiveFormsModule,
    NgIf,
    MatInputModule,
    MatFormField,
    MatButtonModule
   ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    loginForm:FormGroup;

    constructor(){
      this.loginForm =new FormGroup({
        login: new FormControl('',[Validators.required, Validators.minLength(3)]),
        password: new FormControl('',[Validators.required, no$InPassWordValidator])
      })
    }

    login():void{
      console.log(this.loginForm);
    }
}

function no$InPassWordValidator(c: AbstractControl): ValidationErrors | null{
 if((c.value as string).indexOf('$')<0)
  {
    return null;
  }
  return {
    no$InPassword:false
  }
}