import { Routes } from '@angular/router';
import { ListadoMuestrasComponent } from './components/listado-muestras/listado-muestras.component';
import { AnadirMuestraComponent } from './components/anadir-muestra/anadir-muestra.component';
import { EditarMuestraComponent } from './components/editar-muestra/editar-muestra.component';
import { VerMuestraComponent } from './components/ver-muestra/ver-muestra.component';

export const routes: Routes = [
  { path: '', redirectTo: 'listarMuestras', pathMatch: 'full' },
  { path: 'listarMuestras', component: ListadoMuestrasComponent },
  { path: 'anadirMuestra', component: AnadirMuestraComponent },
  { path: 'editarMuestra/:id', component: EditarMuestraComponent },
  { path: 'verMuestra/:id', component: VerMuestraComponent }
];
