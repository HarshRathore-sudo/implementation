import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeferedComponent } from './components/defered/defered.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeferedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'defer-blocks';
}
