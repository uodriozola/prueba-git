import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
      {
        path: 'landing',
        loadChildren: () => import('./landing/landing.module').then(mod => mod.LandingModule)
      },
      // Si es vacío redirige a landing
      {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
      },
      // Si es cualquier ruta inexistente redirige a landing
      {
        path: '**',
        redirectTo: 'landing',
        pathMatch: 'full'
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
