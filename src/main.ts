import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './app/material-module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {SidenavAutosize} from "./app/side-nav/sidenav-autosize";
import { BioComponent } from './app/projects/bio/bio.component';
import { MainComponent } from './app/main/main.component';
import { DuoComponent } from './app/projects/duo/duo.component';
import { MenuComponent } from './app/menu/menu.component';
import { IngComponent } from './app/projects/ing/ing.component';
import { TudComponent } from './app/projects/tud/tud.component';
import { DjiComponent } from './app/projects/dji/dji.component';
import { ExsComponent } from './app/projects/exs/exs.component';

// Default MatFormField appearance to 'fill' as that is the new recommended approach and the
// `legacy` and `standard` appearances are scheduled for deprecation in version 10.
// This makes the examples that use MatFormField render the same in StackBlitz as on the docs site.
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [SidenavAutosize],
  declarations: [SidenavAutosize, BioComponent, MainComponent, DuoComponent, MenuComponent, IngComponent, TudComponent, DjiComponent, ExsComponent],
  bootstrap: [SidenavAutosize],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
