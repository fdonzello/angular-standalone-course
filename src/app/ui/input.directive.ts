import { Directive } from '@angular/core';

@Directive({
  selector: 'input',
  standalone: true,
  host: {
    'class': 'mt-2 mb-2'
  }
})
export class InputDirective { }
