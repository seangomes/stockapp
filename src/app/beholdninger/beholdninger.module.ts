import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { BeholdningerRoutingModule } from './beholdninger-routing.module';
import { BeholdningListComponent } from './components/beholdning-list/beholdning-list.component';
import { AddBeholdningComponent } from './components/add-beholdning/add-beholdning.component';
import { EditBeholdningComponent } from './components/edit-beholdning/edit-beholdning.component';

@NgModule({
  imports: [
    CommonModule,
    BeholdningerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [BeholdningListComponent, AddBeholdningComponent, EditBeholdningComponent]
})
export class BeholdningerModule { }
