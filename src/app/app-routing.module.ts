import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'event', loadChildren: () => import('./event/event.module').then(m => m.EventModule) },
 { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }, 
 { path: 'card', loadChildren: () => import('./card/card.module').then(m => m.CardModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
