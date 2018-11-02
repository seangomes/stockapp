import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'aktier', pathMatch: 'full'},
  { path: 'aktier',  loadChildren: '../aktier/aktier.module#AktierModule' },
  { path: 'beholdninger',  loadChildren: '../beholdninger/beholdninger.module#BeholdningerModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
