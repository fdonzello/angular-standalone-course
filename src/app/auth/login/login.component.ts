import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { emailField, passwordField } from 'src/app/forms/fields';
import { InputDirective } from 'src/app/ui/input.directive';
import { FormDirective } from 'src/app/ui/form.directive';
import { ButtonDirective } from 'src/app/ui/button.directive';

@Component({
  selector: 'fradev-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonDirective,
    InputDirective,
    FormDirective
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = inject(FormBuilder).group({
    email: emailField(),
    password: passwordField()
  })

  submit() { }
}
