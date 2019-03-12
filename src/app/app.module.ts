import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

const APP_MODULE = [
  AppRoutingModule,
  CoreModule,
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_MODULE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
