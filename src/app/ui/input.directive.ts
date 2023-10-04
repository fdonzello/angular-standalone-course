import { Directive } from '@angular/core';

@Directive({
  selector: 'input',
  standalone: true,
  host: {
    'class': `
    my-3 
    border 
    text-sm 
    rounded-lg
    block 
    w-full 
    p-2.5 
    bg-gray-100 
    border-gray-600 
    placeholder-gray-400 
    text-white
    focus:ring-blue-500
    focus:border-blue-500
    `
  }
})
export class InputDirective { }
