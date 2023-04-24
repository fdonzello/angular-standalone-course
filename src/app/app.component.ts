import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InputDirective } from './ui/input.directive';

@Component({
  selector: 'fradev-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'train-online';
}
