import { Injectable } from '@angular/core';
import { Aktie } from "../../aktier/models/aktie";
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Beholdning } from '../../beholdninger/models/beholdning';


@Injectable()
export class AktieService {

  private aktieCollection : AngularFirestoreCollection<Aktie>;
  private beholdningCollection: AngularFirestoreCollection<Beholdning>;

  public aktier$ : Observable<Aktie[]>;
  public selctedAktie : Aktie;

  public beholdninger$ : Observable<Beholdning[]>;
  public selectedBeholdning: Beholdning;

  constructor(private afs: AngularFirestore, private router: Router) {
    this.aktieCollection = afs.collection<Aktie>('aktier');
    this.beholdningCollection = afs.collection<Beholdning>('beholdninger');
   }

   getAllAktier() : Observable<Aktie[]> {
    return this.aktier$ = this.aktieCollection.valueChanges();
   }

   addNewAktie(aktie: Aktie) {
      if(aktie) {
        //generate new key
        const newKey = this.afs.createId();

        let newAktie: Aktie = {
          id: newKey,
          name: aktie.name,
          taxPrice: aktie.taxPrice,
          yieldPrice: aktie.yieldPrice,
          totalEarningPrice: aktie.totalEarningPrice,
          createdDate: aktie.createdDate,
          userId: "1"
        }

        this.afs.collection('aktier').doc(newKey).set(newAktie).then(() => {
          this.router.navigateByUrl("/aktier");
        });
      }
   }

   editAktieUdbytte(aktie: Aktie) {
    if(aktie) {
      let aktieDocRef = this.afs.collection('aktier').doc(aktie.id);
      if(aktieDocRef) {
        aktieDocRef.update({
          name: aktie.name,
          taxPrice: aktie.taxPrice,
          yieldPrice: aktie.yieldPrice,
          totalEarningPrice: aktie.totalEarningPrice,
          createdDate: aktie.createdDate
        }).then((data) => {
          this.router.navigateByUrl("/aktier");
        });

      }
    }
   }

   deleteAktieUdbytte(aktie: Aktie) {
    if(aktie) {
      this.afs.collection('aktier').doc(aktie.id).delete().then(() => {
        this.router.navigateByUrl("/aktier");
      });
    }
   }

   mapSelectedAktie(aktie: Aktie) {
     if(aktie && aktie !== null) {
       this.selctedAktie = aktie;
       this.router.navigateByUrl("aktier/edit-udbytte");
     }
     else{
      this.selctedAktie = null;
      this.router.navigateByUrl("aktier");
     }
   }

   mapSelectedBeholdning(beholdning: Beholdning) {
    if(beholdning && beholdning !== null) {
      this.selectedBeholdning = beholdning;
      this.router.navigateByUrl("beholdninger/edit-beholdning");
    }
    else{
     this.selectedBeholdning = null;
     this.router.navigateByUrl("beholdninger");
    }
  }

   //Beholdninger
   getAllBeholdninger() {
    return this.beholdninger$ = this.beholdningCollection.valueChanges();
   }

   addNewBeholdning(beholdning: Beholdning) {
    if(beholdning) {
      //generate new key
      const newKey = this.afs.createId();

      let newBeholdning: Beholdning = {
        id: newKey,
        name: beholdning.name,
        antal: beholdning.antal,
        userId: "1"
      }

      this.afs.collection('beholdninger').doc(newKey).set(newBeholdning).then(() => {
        this.router.navigateByUrl("/beholdninger");
      });
    }
 }
}
