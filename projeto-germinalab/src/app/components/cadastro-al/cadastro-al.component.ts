
import {Component, inject} from '@angular/core';
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
    nameCtrl: ['', Validators.required],

  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = true;
}
