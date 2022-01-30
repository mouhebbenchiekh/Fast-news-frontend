
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './auth/profile/profile.component';

import { AuthGuard } from './shared/auth.guard';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: 'log-in', component: LoginComponent },
  { path: 'sign-up', component: RegisterComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'news/:topic',
    component: NewsComponent,
    canActivate: [AuthGuard],
  },
];
                                                                                              
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
