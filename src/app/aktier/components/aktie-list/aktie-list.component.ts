import { Component, OnInit } from '@angular/core';
import { Aktie } from "../../models/aktie";
import { AktieService } from '../../../core/providers/aktie.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aktie-list',
  templateUrl: './aktie-list.component.html',
  styleUrls: ['./aktie-list.component.css']
})
export class AktieListComponent implements OnInit {

  public aktier : Aktie[] = [];
  public totalPrice: number = 0;
  //Sort props
  public sortByNamesList: any = ["Aktienavn", "Dato"]
  public selectedFilterValue: string = "";

  //Filter ny names props
  public selectedAktie:string = "";


  constructor(private aktieService: AktieService, public router: Router) { }

  ngOnInit() {
    this.getAllAktier().subscribe((data) => {
      this.aktier = data;
      if(this.aktier) {
        this.calcTotalPrice();
      }
    });


  }

  getAllAktier() : Observable<Aktie[]> {
    return this.aktieService.getAllAktier();
  }

  calcTotalPrice() : void {
    this.totalPrice = 0;

    this.aktier.forEach(item => {
      this.totalPrice += item.totalEarningPrice;
    });
  }

  addAktie() {
    this.router.navigate(['aktier/add-aktie']);
  }

  goToStock(aktie: Aktie) {
    this.aktieService.mapSelectedAktie(aktie);
  }

  public selectedFilter(filterName: string) {
    if(filterName != this.selectedFilterValue){
      this.selectedFilterValue = filterName;
    }else{
      this.selectedFilterValue = "";
    }
    console.log(this.selectedFilterValue);
  }

}
