import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sandbox',
    loadComponent: () =>
      import('./sandbox/sandbox.component').then((m) => m.SandboxPageComponent),
  },
  {
    path: '**',
    redirectTo: 'sandbox',
    pathMatch: 'full',
  },
];
