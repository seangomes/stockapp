import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeholdningListComponent } from './components/beholdning-list/beholdning-list.component';
import { EditBeholdningComponent } from './components/edit-beholdning/edit-beholdning.component';
import { AddBeholdningComponent } from './components/add-beholdning/add-beholdning.component';


const routes: Routes = [
  { path: '', component: BeholdningListComponent},
  { path: 'add-beholdning', component: AddBeholdningComponent},
  { path: 'edit-beholdning', component: EditBeholdningComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeholdningerRoutingModule { }
