import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';
import { TabMenuComponent } from './components/tab-menu/tab-menu.component';
import { AktieService } from "./providers/aktie.service";

const fbConfig = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA5lfcE3yJlX_VBhhAJQT6MNtn_xH85geY",
    authDomain: "stocktracker-c2212.firebaseapp.com",
    databaseURL: "https://stocktracker-c2212.firebaseio.com",
    projectId: "stocktracker-c2212",
    storageBucket: "",
    messagingSenderId: "962353380475"
  }
};

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    AngularFireModule,
    AngularFireModule.initializeApp(fbConfig.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features

  ],
  declarations: [TabMenuComponent],
  providers: [AktieService],
  exports: [RouterModule, TabMenuComponent]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule, private afs: AngularFirestore) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }

    const settings = { timestampsInSnapshots: true };
    this.afs.firestore.settings( settings );
  }

 }
