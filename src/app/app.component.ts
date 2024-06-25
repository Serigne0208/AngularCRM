import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { LoginComponent } from './login/login.component';
import{MatToolbarModule} from '@angular/material/toolbar';
@Component({
  selector: 'crm-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,  LoginComponent,MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularCRM';
}
