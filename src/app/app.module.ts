import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { AdminAuthGuard } from './guards/admin_auth.guard';
import { AdminNotAuthGuard } from './guards/admin_notAuth.guard';
import { HostAuthGuard } from './guards/host_auth.guard';
import { HostNotAuthGuard } from './guards/host_notAuth.guard';
import { EvaluatorAuthGuard } from './guards/evaluator_auth.guard';
import { EvaluatorNotAuthGuard } from './guards/evaluator_notAuth.guard';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HostLoginComponent } from './components/host-login/host-login.component';
import { HostDashboardComponent } from './components/host-dashboard/host-dashboard.component';
import { EvaluatorLoginComponent } from './components/evaluator-login/evaluator-login.component';
import { EvaluatorDashboardComponent } from './components/evaluator-dashboard/evaluator-dashboard.component';
import { HostRegisterComponent } from './components/host-register/host-register.component';
import { EvaluatorRegisterComponent } from './components/evaluator-register/evaluator-register.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { ViewEventsComponent } from './components/view-events/view-events.component';
import { ViewHostsComponent } from './components/view-hosts/view-hosts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    AdminLoginComponent,
    ProfileComponent,
    AdminDashboardComponent,
    HostLoginComponent,
    HostDashboardComponent,
    EvaluatorLoginComponent,
    EvaluatorDashboardComponent,
    HostRegisterComponent,
    EvaluatorRegisterComponent,
    AddEventComponent,
    ViewEventsComponent,
    ViewHostsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
	  FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlashMessagesModule
  ],
  providers: [AuthService,AuthGuard, NotAuthGuard,AdminAuthGuard,AdminNotAuthGuard,EvaluatorAuthGuard,EvaluatorNotAuthGuard,HostAuthGuard,HostNotAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
