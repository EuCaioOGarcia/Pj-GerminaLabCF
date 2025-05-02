
import {Component, inject, Type} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
/**
 * @title Stepper overview
 */
@Component({
  selector: 'app-cadastro-al',
  standalone: true,
  templateUrl: './cadastro-al.component.html',
  styleUrl: './cadastro-al.component.css',
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterOutlet
  ],
})
export class CadastroAlComponent {
  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    nameCtrl: ['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ ]+$')]],
    emailCtrl: ['', [Validators.required, Validators.email]],
    generoCtrl: ['', [Validators.required, Validators.required, Validators.pattern('^(masculino|feminino)$')]],
    dtNascimentoCtrl: ['', [Validators.required, Validators.pattern('^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/(19|20)\\d\\d$')]],
    TipoAlimentacaoCtrl: ['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ ]+$')]],
    escolaridadePais: ['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ ]+$')]],

  });
  secondFormGroup = this._formBuilder.group({
    Linguagensctrl: ['', [Validators.required, Validators.pattern('^(10(\.0)?|[0-9](\.[0-9])?)$')]],
    Exatasctrl: ['', [Validators.required, Validators.pattern('^(10(\.0)?|[0-9](\.[0-9])?)$')]],
    Cienciasctrl: ['', [Validators.required, Validators.pattern('^(10(\.0)?|[0-9](\.[0-9])?)$')]],
  });
  isLinear = true;
}
