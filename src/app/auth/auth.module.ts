//AngularModule
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//module de material
import { MaterialModule } from '../material/material.module';
//authRoutingModule
import { AuthRoutingModule } from './auth-routing.module';
//auth pages component
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
  ]
})
export class AuthModule { }
