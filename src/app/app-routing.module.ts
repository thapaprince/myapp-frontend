import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Profile2Component } from './features/profile2/profile2.component';
import { AuthGuard } from './core/guard/auth.guard';
import { roleGuard } from './core/guard/role.guard';
import { ProfileDetailsComponent } from './features/profile-details/profile-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/categories/categories.module').then(m=>m.CategoriesModule)
  },

  { path: 'profile', component: Profile2Component, canActivate: [AuthGuard, roleGuard], data: { roles: ['admin', 'user'] } },

  { path: 'profileDetails/:id', component: ProfileDetailsComponent, canActivate: [AuthGuard, roleGuard], data: { roles: ['user'] } },
  { path: 'categories', loadChildren: () => import('./features/categories/categories.module').then(m => m.CategoriesModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
