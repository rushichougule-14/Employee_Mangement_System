import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpEditComponent } from './components/emp-edit/emp-edit.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { EmpDeleteComponent } from './components/emp-delete/emp-delete.component';
import { EmpAddComponent } from './components/emp-add/emp-add.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:'emp-list',component:EmpListComponent,canActivate:[authGuard]},

  {path:'emp-edit/:empId',component:EmpEditComponent,canActivate:[authGuard]},

  {path:'emp-add',component:EmpAddComponent,canActivate:[authGuard]},

  {path:'emp-delete/:empId',component:EmpDeleteComponent,canActivate:[authGuard]},

  {path:'register',component:RegisterComponent},

  {path:'login',component:LoginComponent},

  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: '**', component:NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
