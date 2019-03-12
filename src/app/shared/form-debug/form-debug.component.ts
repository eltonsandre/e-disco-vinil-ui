import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-debug',
  template: `
  <div class="form-debug" [ngClass]="form.valid ? 'div-debug-valid' : 'div-debug-invalid'" *ngIf="form">
    <div>Detalhes do form {{ nome }}</div>
      <pre>Form válido: {{ form.valid }}</pre>
    <pre>Valores: <br>{{ form.value | json }}</pre>
  </div>
  `,
  styles: [`
    .form-debug {
      margin-top: 20px;
      padding: 10px;
      overflow: auto;
  }

  .div-debug-invalid {
      border: 1px solid red;
      background-color: #ff2a6a9a
  }

  .div-debug-valid {
      border: 1px solid green;
      background-color: #61ff769a
  }
`]
})
export class FormDebugComponent implements OnInit {

  @Input() form;
  @Input() nome?;

  constructor() { }

  ngOnInit() {
  }

}
