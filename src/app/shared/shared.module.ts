import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormDebugComponent } from './form-debug/form-debug.component';
import { MessageModule } from './message.module';
import { MessageComponent } from './message.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormDebugComponent,
    MessageComponent,
  ],
  exports: [
    FormDebugComponent,
    MessageComponent,
  ],
})
export class SharedModule { }
