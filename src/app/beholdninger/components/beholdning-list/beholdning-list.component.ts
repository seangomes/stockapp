import { Component, OnInit } from '@angular/core';
import { Beholdning } from '../../models/beholdning';
import { AktieService } from '../../../core/providers/aktie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beholdning-list',
  templateUrl: './beholdning-list.component.html',
  styleUrls: ['./beholdning-list.component.css']
})
export class BeholdningListComponent implements OnInit {

  public beholdninger: Beholdning[] = [];

  constructor(private aktieService: AktieService, public router: Router) {
    this.aktieService.getAllBeholdninger().subscribe(data => this.beholdninger = data);
   }

  ngOnInit() {
  }

  goToStock(beholdning: Beholdning) {
    if(beholdning) {
      this.aktieService.mapSelectedBeholdning(beholdning);
    }
  }

  addBeholdning(){
    this.router.navigateByUrl('beholdninger/add-beholdning');
  }

}
