import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import {DataViewModule} from 'primeng/dataview';

import { CatalogosRoutingModule } from './catalogos-routing.module';
import { CatalogosPesquisaComponent } from './catalogos-pesquisa/catalogos-pesquisa.component';

import { SharedModule } from '../shared/shared.module';

const NG_MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
];

const PRIMENG_MODULES = [
  ButtonModule,
  CalendarModule,
  InputTextModule,
  PanelModule,
  TabViewModule,
  SelectButtonModule,
  DataViewModule,
  DropdownModule,
];

const APP_MODULES = [
  SharedModule,
  CatalogosRoutingModule
];

const COMP_CATALOGO = [
  CatalogosPesquisaComponent
];

@NgModule({
  declarations: [
    COMP_CATALOGO
  ],
  imports: [
    NG_MODULES,
    PRIMENG_MODULES,
    APP_MODULES,
  ]
})
export class CatalogosModule { }
