import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { BroccoliComponent } from './broccoli/broccoli.component';
import { DeatComponent } from './deat/deat.component';
import { PotatoconComponent } from './potatocon/potatocon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BroccoliComponent,
    DeatComponent,
    PotatoconComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
