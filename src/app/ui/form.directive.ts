import { Directive } from '@angular/core';

@Directive({
  selector: 'form',
  standalone: true,
  host: {
    'class': `
      flex
      flex-column
    `
  }
})
export class FormDirective { }
