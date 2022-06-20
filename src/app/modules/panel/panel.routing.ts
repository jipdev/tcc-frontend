import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['painel/login']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/shell/shell.module').then(m => m.ShellModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'login',
    loadChildren: () => import('./core/authentication/authentication.module').then(m => m.AuthenticationModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PanelRoutingModule { }
