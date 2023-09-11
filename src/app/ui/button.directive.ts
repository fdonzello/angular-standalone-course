import { Directive } from '@angular/core';

@Directive({
  selector: 'button',
  standalone: true,
  host: {
    'class': `
      px-8
      py-2
      border-2
      rounded-lg
      border-lime-600
      bg-lime-600
      hover:bg-lime-800
      hover:border-lime-800
      transition
      ease-in-out

      font-bold
    `
  }
})
export class ButtonDirective { }
