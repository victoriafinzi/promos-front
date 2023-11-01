import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth.guard';
import { AuthInterceptor } from './login/auth.interceptor';
import { PromosDashboardComponent } from './promos-dashboard/promos-dashboard.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { PromoRegistrationComponent } from './promo-registration/promo-registration.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PromosDashboardComponent,
    UserRegistrationComponent,
    PromoRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [    
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
