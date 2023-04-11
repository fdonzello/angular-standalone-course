import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fradev-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'train-online';
}
