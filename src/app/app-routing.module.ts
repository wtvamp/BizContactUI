import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login/login.component';
import {PrivateComponent} from './private/secured/secured.component';
import { ContactComponent} from './private/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: PrivateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
