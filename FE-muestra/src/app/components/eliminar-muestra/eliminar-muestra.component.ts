import { Component, inject } from '@angular/core';
import { MuestraService } from '../../services/muestra.service';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import {RouterLink} from "@angular/router";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-eliminar-muestra',
  imports: [RouterLink],
  templateUrl: './eliminar-muestra.component.html',
  styleUrl: './eliminar-muestra.component.css'
})
export class EliminarMuestraComponent {
  id: number = 0;

  // Snackbar
  private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000
    });
  }

  constructor(private _muestraService: MuestraService, private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  async eliminarMuestra() {
    try{
      const response = await firstValueFrom(this._muestraService.deleteMuestra(this.id));
      this.openSnackBar("La muestra ha sido eliminada con exito", "Aceptar")

    } catch (error) {
      this.openSnackBar("ERROR: La muestra no ha podido ser añadida", "Aceptar")

    }
  }

}
