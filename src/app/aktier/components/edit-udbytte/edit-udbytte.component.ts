import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aktie } from '../../models/aktie';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment'; // add this 1 of 4
import { AktieService } from '../../../core/providers/aktie.service';


@Component({
  selector: 'app-edit-udbytte',
  templateUrl: './edit-udbytte.component.html',
  styleUrls: ['./edit-udbytte.component.css']
})
export class EditUdbytteComponent implements OnInit {

  editAktieFormGroup: FormGroup;
  aktie: Aktie;

  constructor(private fb: FormBuilder, private aktieService: AktieService) {
    this.aktie = this.aktieService.selctedAktie;
    if(this.aktie === null || this.aktie === undefined)  {
      this.goBack();
    }
    else {
      this.editAktieForm();
      this.editAktieFormGroup.patchValue({
        name: this.aktie.name,
        yieldPrice: this.aktie.yieldPrice,
        taxPrice: this.aktie.taxPrice,
        createdDate: this.aktie.createdDate
      });
    }
   }

  ngOnInit() {
  }

  editAktieForm() {
    this.editAktieFormGroup = this.fb.group({
      name: ['', [Validators.required]],
      yieldPrice: ['', [Validators.required]],
      taxPrice: ['', [Validators.required]],
      totalEarningPrice: [''],
      createdDate: ['', [Validators.required]],
    });
  }

  editAktieSubmit({value, valid}: {value: Aktie, valid: boolean}) {
    if(valid) {
      value.createdDate = moment(value.createdDate).format('DD-MM-YYYY')
      //calculate total earning
      value.totalEarningPrice = value.yieldPrice - value.taxPrice;
      value.id = this.aktie.id;
      this.aktieService.editAktieUdbytte(value);
    }
  }

  deleteAktieUdbytte(aktie: Aktie) {
    if(aktie) {
      this.aktieService.deleteAktieUdbytte(aktie);
    }
  }

  goBack() {
    this.aktieService.mapSelectedAktie(null);
  }

}
