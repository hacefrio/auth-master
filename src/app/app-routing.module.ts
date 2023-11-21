import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './shared/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[LoginGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./page/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then( m => m.RegisterPageModule)
  },
  
  {
    path: 'ver-opiniones',
    loadChildren: () => import('./page/ver-opiniones/ver-opiniones-routing.module').then( m => m.VerOpinionesPageRoutingModule),
    canActivate:[LoginGuard]
  },
  {
    path: 'crear-opinion',
    loadChildren: () => import('./page/crear-opinion/crear-opinion-routing.module').then( m => m.CrearOpinionPageRoutingModule),
    canActivate:[LoginGuard]
  },
  {
    path: '**', redirectTo: 'auth', pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./page/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'ver-opiniones',
    loadChildren: () => import('./page/ver-opiniones/ver-opiniones.module').then( m => m.VerOpinionesPageModule)
  },
  {
    path: 'crear-opinion',
    loadChildren: () => import('./page/crear-opinion/crear-opinion.module').then( m => m.CrearOpinionPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
