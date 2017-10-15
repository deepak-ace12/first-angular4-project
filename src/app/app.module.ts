import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BlueColorDirective } from './blue-color.directive';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { 
    path: 'dashboard',   //localhost/dashboard
    component: DashboardComponent 
  },
  {
    path : '',
    component : HomeComponent
  },
   {
    path : 'login',
    component : LoginComponent
  }
 ];

@NgModule({
  declarations: [
    AppComponent,
    BlueColorDirective,
    DashboardComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
