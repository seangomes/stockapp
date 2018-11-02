import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { AktieService } from '../../../core/providers/aktie.service';
import { Aktie } from '../../models/aktie';
import { setTheme } from 'ngx-bootstrap/utils';
import * as moment from 'moment'; // add this 1 of 4
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-aktie',
  templateUrl: './add-aktie.component.html',
  styleUrls: ['./add-aktie.component.css']
})
export class AddAktieComponent implements OnInit {

  newAddAktieForm: FormGroup;
  public colorTheme = 'theme-dark-blue';
  bsValue =  new Date();
  aktieNames:string[] = [];

  constructor(private fb: FormBuilder, private aktieService: AktieService) {
    setTheme('bs4');

    this.aktieService.getAllBeholdninger().subscribe((aktieList) => {
      aktieList.forEach((aktie) => {
        this.aktieNames.push(aktie.name);
      });
    });

   }

  ngOnInit() {
    this.addNewAktieForm();
    this.getTodayDate();
  }

  getTodayDate() : any {
    let today = new Date();
    var formattedDate = moment(today).format('DD-MM-YYYY');
    this.newAddAktieForm.patchValue({
      createdDate: formattedDate
    });
  }

  addNewAktieForm() {
    this.newAddAktieForm = this.fb.group({
      name: ['', [Validators.required]],
      yieldPrice: ['', [Validators.required]],
      taxPrice: ['', [Validators.required]],
      totalEarningPrice: [''],
      createdDate: ['', [Validators.required]],
    });
  }

  addAktie({value, valid}: {value: Aktie, valid: boolean}) {
    if(valid) {
      value.createdDate = moment(value.createdDate).format('DD-MM-YYYY')

      //calculate total earning
      value.totalEarningPrice = value.yieldPrice - value.taxPrice;

      this.aktieService.addNewAktie(value);
    }
  }
}
