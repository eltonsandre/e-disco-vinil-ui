import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import localePt from '@angular/common/locales/pt';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, registerLocaleData } from '@angular/common';

import { GrowlModule } from 'primeng/growl';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';

registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    GrowlModule,
    ConfirmDialogModule,
  ],

  declarations: [
    PaginaNaoEncontradaComponent,
  ],

  exports: [
    GrowlModule,
    ConfirmDialogModule,
  ],

  providers: [
    ConfirmationService,
    MessageService,
    Title,
    { provide: LOCALE_ID, useValue: 'pt' }
  ]
})
export class CoreModule { }
