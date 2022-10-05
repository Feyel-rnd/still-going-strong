import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { SecondaryPageComponent } from './secondary-page/secondary-page.component';
import { Routes, RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { YourGuard } from './your-guard.guard';
import { ConnexionFormComponent } from './connexion-form/connexion-form.component';
import { CheckPageComponent } from './check-page/check-page.component';
//import { RegisterFormComponent } from './register-form/register-form.component';

//const routes: Routes = []; // sets up routes constant where you define your routes
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: ConnexionFormComponent },
  {
    path: 'dashboard',
    component: MainPageComponent,
    canActivate: [YourGuard],
  },
 // { path: 'register-component', component: RegisterFormComponent },
  { path: 'create-account', component: SecondaryPageComponent },
  { path: 'check-page-component', component: CheckPageComponent },
  { path: '**',  redirectTo: '/login', pathMatch: 'full'},
];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule {}
