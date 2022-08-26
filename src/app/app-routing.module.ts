import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterFormComponent } from './register-form/register-form.component';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path: 'register-form', component:RegisterFormComponent},
  {path: 'user', component:UserComponent},
  {path: 'welcome', component:WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
