import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicGuard, SecurityGuard} from '@security/guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [SecurityGuard],
    loadChildren: () => import('./modules/private/private.module').then(m => m.PrivateModule)
  },
  {
    path: 'account',
    canActivate: [PublicGuard],
    loadChildren: () => import('./security/security.module').then(m => m.SecurityModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
