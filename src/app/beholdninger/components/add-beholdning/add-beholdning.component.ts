import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AktieService } from '../../../core/providers/aktie.service';
import { Beholdning } from '../../models/beholdning';

@Component({
  selector: 'app-add-beholdning',
  templateUrl: './add-beholdning.component.html',
  styleUrls: ['./add-beholdning.component.css']
})
export class AddBeholdningComponent implements OnInit {

  newAddBeholdningForm: FormGroup;

  constructor(private fb: FormBuilder, private aktieService: AktieService) { }

  ngOnInit() {
    this.addNewBeholdningForm();
  }

  addNewBeholdningForm() {
    this.newAddBeholdningForm = this.fb.group({
      name: ['', [Validators.required]],
      antal: ['', [Validators.required]],
    });
  }

  addBeholdning({value, valid}: {value: Beholdning, valid: boolean}) {
    if(valid) {
      this.aktieService.addNewBeholdning(value);
    }
  }


}
