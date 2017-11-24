import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// COMPONENTES PARA REDIRECCIONAR
import {HomeComponent} from './controller/home.component';
import {LoginComponent} from './controller/login.component';
import {RegisterComponent} from './controller/register.component';
import {UserComponent} from './controller/user.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'user', component: UserComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);