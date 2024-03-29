import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonDirective } from './ui/button.directive';

@Component({
  selector: 'fradev-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonDirective,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
