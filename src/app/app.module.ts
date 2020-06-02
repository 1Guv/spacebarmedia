import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaimComponent } from './claim/claim.component';
import { SuccessComponent } from './success/success.component';
import { MinuteSecondsPipe } from './_pipes/minuteSeconds.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClaimComponent,
    SuccessComponent,
    MinuteSecondsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
