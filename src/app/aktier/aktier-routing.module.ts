import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AktieListComponent } from './components/aktie-list/aktie-list.component';
import { AddAktieComponent } from './components/add-aktie/add-aktie.component';
import { EditUdbytteComponent } from './components/edit-udbytte/edit-udbytte.component';

const routes: Routes = [
  { path: '', component: AktieListComponent },
  { path: 'add-aktie', component: AddAktieComponent},
  { path: 'edit-udbytte', component: EditUdbytteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AktierRoutingModule { }
