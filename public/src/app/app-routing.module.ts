import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewPollComponent } from './new-poll/new-poll.component';
import { ShowPollComponent } from './show-poll/show-poll.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginComponent},
  {path: 'dashboard', pathMatch: 'full', component: DashboardComponent},
  {path: 'new_poll', pathMatch: 'full', component: NewPollComponent},
  {path: 'poll/:id', component: ShowPollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
