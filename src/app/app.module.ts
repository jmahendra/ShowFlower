import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Asses1Component } from './asses1/asses1.component';
import { Asses2Component } from './asses2/asses2.component';

@NgModule({
  declarations: [
    AppComponent,
    Asses1Component,
    Asses2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
