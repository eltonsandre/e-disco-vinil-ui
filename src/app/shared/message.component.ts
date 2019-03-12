import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="!isShowAllErros && temErro()" class="ui-message ui-messages-error">
      <span style="color: red">{{ text }}</span>
    </div>

    <div *ngIf="isShowAllErros && temErroErrors()" class="ui-message ui-messages-error">
      <span style="color: red" *ngFor="let error of listaErrors()">{{ error }}</span>
    </div>
  `,
  styles: [`
    .ui-message {
      border: 1px solid red;
      background-color: #f79d97;
      border-radius: 2px 2px 15px 15px;
    }
    .ui-messages-error {
      margin: 0;
      margin-top: 2px;
      padding: .15em .5em;
    }
  `]
})
export class MessageComponent {

  private static readonly errorMessages = {
    required: () => 'Este campo é obrigatório.',
    minlength: (params) => `O minimo de caracteres é  ${params.requiredLength}`,
    maxlength: (params) => `O numero maximo de caracteres é ${params.requiredLength}`,
    pattern: (params) => `O padrão requerido ${params.requiredPattern}`,
    uniqueName: (params) => params.message,
    numerosTelefones: (params) => params.message,
    numeroTelefone: (params) => params.message
  };


  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;
  @Input() isSubmit: boolean;
  @Input() isShowAllErros = false;


  private getMessage(type: string, params: any) {
    return MessageComponent.errorMessages[type](params);
  }

  listaErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  temErroErrors(): boolean {
    return this.control && this.control.errors && (this.control.dirty || this.control.touched);
  }

  temErro(): boolean {
    if (this.isSubmit !== undefined) {
      return this.temErroSubmit();
    }
    return this.control.hasError(this.error) && this.control.dirty;
  }

  temErroSubmit(): boolean {
    return (!this.control.valid && this.control.touched) ||
      (this.control.untouched && this.isSubmit);
  }
}
