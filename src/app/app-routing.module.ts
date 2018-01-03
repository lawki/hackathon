import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { HostRegisterComponent } from './components/host-register/host-register.component';
import { EvaluatorRegisterComponent } from './components/evaluator-register/evaluator-register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HostLoginComponent } from './components/host-login/host-login.component';
import { HostDashboardComponent } from './components/host-dashboard/host-dashboard.component';
import { EvaluatorLoginComponent } from './components/evaluator-login/evaluator-login.component';
import { EvaluatorDashboardComponent } from './components/evaluator-dashboard/evaluator-dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { AdminAuthGuard } from './guards/admin_auth.guard';
import { AdminNotAuthGuard } from './guards/admin_notAuth.guard';
import { HostAuthGuard } from './guards/host_auth.guard';
import { HostNotAuthGuard } from './guards/host_notAuth.guard';
import { EvaluatorAuthGuard } from './guards/evaluator_auth.guard';
import { EvaluatorNotAuthGuard } from './guards/evaluator_notAuth.guard';
import { AddEventComponent } from './components/add-event/add-event.component';
import { ViewEventsComponent } from './components/view-events/view-events.component';
import { ViewHostsComponent } from './components/view-hosts/view-hosts.component';
import { ViewHostEventsComponent } from './components/view-host-events/view-host-events.component';
import { EventPageComponent } from './components/event-page/event-page.component';
import { ConfigureEventComponent } from './components/configure-event/configure-event.component';
import { TeamRegistrationComponent } from './components/team-registration/team-registration.component';
import { SubmitArtifactComponent } from './components/submit-artifact/submit-artifact.component';
import { EvalEventwiseRegisteredTeamsComponent } from './components/eval-eventwise-registered-teams/eval-eventwise-registered-teams.component';
import { EvalTeamwiseSubmissionsComponent } from './components/eval-teamwise-submissions/eval-teamwise-submissions.component';
import { UserEventwiseSubmissionsComponent } from './components/user-eventwise-submissions/user-eventwise-submissions.component';
import { EvalSubmitEvaluationFormComponent } from './components/eval-submit-evaluation-form/eval-submit-evaluation-form.component';
import { DemoComponent } from './components/demo/demo.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent // Default Route
  },
  {
    path: 'team-registration/:_id',
    component: TeamRegistrationComponent // Default Route
  },
  {
    path: 'demo',
    component: DemoComponent // Default Route
  },
  {
    path: 'eval-submit-evaluation-form/:evaluator_username/:_id',
    component: EvalSubmitEvaluationFormComponent // Default Route
  },
  {
    path: 'eval-teamwise-submissions/:event_title/:_id',
    component: EvalTeamwiseSubmissionsComponent // Default Route
  },
  {
    path: 'user-teamwise-submissions/:event_title/:_id',
    component: UserEventwiseSubmissionsComponent // Default Route
  },
  {
    path: 'eval-eventwise-registered-teams/:_id',
    component: EvalEventwiseRegisteredTeamsComponent // Default Route
  },
  {
    path: 'submit-artifact/:_id',
    component: SubmitArtifactComponent // Default Route
  },
  {
    path: 'event-page/:_id',
    component: EventPageComponent, // Dashboard Route,
  },
  {
    path: 'configure-event/:_id',
    component: ConfigureEventComponent, // Dashboard Route,
	  canActivate: [HostAuthGuard] // User must be logged in to view this route
  },
  {
    path: 'dashboard',
    component: DashboardComponent, // Dashboard Route,
	  canActivate: [AuthGuard] // User must be logged in to view this route
  },
  {
    path: 'view-events',
    component: ViewEventsComponent, // Dashboard Route,
  },
  {
    path: 'view-host-events',
    component: ViewHostEventsComponent, // Dashboard Route,
	  canActivate: [HostAuthGuard] // User must be logged in to view this route
  },
  {
    path: 'view-hosts',
    component: ViewHostsComponent, // Dashboard Route,
	  canActivate: [AdminAuthGuard] // User must be logged in to view this route
  },
  {
    path: 'register',
    component: RegisterComponent, // Register Route
	  canActivate: [NotAuthGuard] // User must NOT be logged in to view this route
  },
  {
    path: 'login',
    component: LoginComponent, // Login Route
	  canActivate: [NotAuthGuard] // User must NOT be logged in to view this route
  },
  {
    path: 'profile',
    component: ProfileComponent, // Login Route
	  canActivate: [AuthGuard] // User must be logged in to view this route
  },
  
  {
    path: 'admin-login',
    component: AdminLoginComponent, // Register Route
    canActivate: [AdminNotAuthGuard] // User must NOT be logged in to view this route
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent, // Register Route
    canActivate: [AdminAuthGuard] // User must be logged in to view this route
  },
  {
    path: 'host-register',
    component: HostRegisterComponent, // Register Route
    canActivate: [AdminAuthGuard] // User must NOT be logged in to view this route
  },
  {
    path: 'host-login',
    component: HostLoginComponent, // Register Route
    canActivate: [HostNotAuthGuard] // User must NOT be logged in to view this route
  },
  {
    path: 'host-dashboard',
    component: HostDashboardComponent, // Register Route
    canActivate: [HostAuthGuard] // User must be logged in to view this route
  },
  {
    path: 'evaluator-register',
    component: EvaluatorRegisterComponent, // Register Route
    canActivate: [AdminAuthGuard] // User must NOT be logged in to view this route
  },
  {
    path: 'evaluator-login',
    component: EvaluatorLoginComponent, // Register Route
    canActivate: [EvaluatorNotAuthGuard] // User must NOT be logged in to view this route
  },
  {
    path: 'evaluator-dashboard',
    component: EvaluatorDashboardComponent, // Register Route
    canActivate: [EvaluatorAuthGuard] // User must be logged in to view this route
  },
  {
    path: 'add-event',
    component: AddEventComponent, // Register Route
    canActivate: [AdminAuthGuard] // User must be logged in to view this route
  },
  { path: '**', component: HomeComponent } // "Catch-All" Route
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
