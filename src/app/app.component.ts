import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { LoginComponent } from './login/login.component';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatIconModule} from '@angular/material/icon';
import{MatIconButton} from '@angular/material/button';
import { DummyComponent } from './component/dummy/dummy.component';
@Component({
  selector: 'crm-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,  LoginComponent,
    MatToolbarModule, DummyComponent,MatIconModule,MatIconButton,
    RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularCRM';

  received($event:string):void{
    console.log($event)
  }
}
