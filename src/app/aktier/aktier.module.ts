import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { AktierRoutingModule } from './aktier-routing.module';
import { AktieListComponent } from './components/aktie-list/aktie-list.component';
import { AddAktieComponent } from './components/add-aktie/add-aktie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { EditUdbytteComponent } from './components/edit-udbytte/edit-udbytte.component';


@NgModule({
  imports: [
    CommonModule,
    AktierRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [AktieListComponent, AddAktieComponent, EditUdbytteComponent],
  providers: []
})
export class AktierModule { }
