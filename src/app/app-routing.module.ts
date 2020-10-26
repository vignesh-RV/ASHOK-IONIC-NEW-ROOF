import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RouterGaurd } from './gaurds/route-gaurd';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { NotificationPage } from './pages/notification/notification.page';
import { PurchaseComponent } from './pages/purchase/purchase.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },{
    path: 'login',
    component: LoginComponent,
    canActivate: [RouterGaurd]
  },{
    path: 'register',
    component: LoginComponent
  },{
    path: 'projects',
    loadChildren: './pages/projects/projects.module#ProjectsModule'
  },{
    path: 'admin',
    component: AdminComponent,
    canActivate: [RouterGaurd]
  },{
    path: 'purchase',
    component: PurchaseComponent,
    canActivate: [RouterGaurd]
  },{
    path: 'notification',
    component: NotificationPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
