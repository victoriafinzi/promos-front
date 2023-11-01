import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/auth.guard';
import { LoginComponent } from './login/login.component';
import { PromosDashboardComponent } from './promos-dashboard/promos-dashboard.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { PromoRegistrationComponent } from './promo-registration/promo-registration.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: PromosDashboardComponent, canActivate:[AuthGuard]},
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'promo-registration', component: PromoRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
