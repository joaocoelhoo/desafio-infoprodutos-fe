import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminComponent } from './pages/admin/admin.component';
import { authGuard } from './services/auth.guard';
import { ItemsComponent } from './pages/items/items.component';
import { ItemManagementComponent } from './pages/item-management/item-management.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'signup', component: SignupComponent
    },
    {
        path: 'admin', component: AdminComponent, canActivate: [authGuard]
    },
    {
        path: 'items', component: ItemsComponent

    },
    { 
        path: 'admin/items', component: ItemManagementComponent
    },
    { 
        path: 'admin/users', component: UserManagementComponent
    },
];