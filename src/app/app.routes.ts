import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './auth/auth-guard';
import { Register } from './auth/register/register';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},

    { path: 'register', component: Register },

    { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },

    {path: 'login', component: Login}
];

