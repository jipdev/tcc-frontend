import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { BUCKET } from "@angular/fire/compat/storage";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { AppRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRouting,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
  ],
  providers: [
    { provide: BUCKET, useValue: environment.firebase.storageBucket }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
