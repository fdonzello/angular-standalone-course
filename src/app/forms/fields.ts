import { FormControl, Validators } from "@angular/forms";

export const emailField = (initialValue: string = '') => new FormControl(initialValue, [
  Validators.required, Validators.email,
])

export const passwordField = (initialValue: string = '') => new FormControl(initialValue, [
  Validators.required, Validators.minLength(6),
])
