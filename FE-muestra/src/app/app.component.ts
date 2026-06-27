import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoMuestrasComponent } from './components/listado-muestras/listado-muestras.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListadoMuestrasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FE-muestra';
}
