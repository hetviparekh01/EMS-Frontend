import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorizontalComponent } from './layout/horizontal/horizontal.component';
import { authGuard } from './core/guards/auth.guard';
import { loginGuard } from './core/guards/login.guard';

const routes: Routes = [
  {
    path:'',
    component:HorizontalComponent,
    loadChildren:()=>import('./pages/pages.module').then(e=>e.PagesModule),
    canActivate:[authGuard]
  },
  {
    path:'auth',
    loadChildren:()=>import('./authentication/authentication.module').then(e=>e.AuthenticationModule),
    canActivate:[loginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
