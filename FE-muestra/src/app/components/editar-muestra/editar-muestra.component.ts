import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { firstValueFrom } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';


import { MuestraService } from '../../services/muestra.service';
import { Muestra } from '../../interfaces/muestra';

@Component({
  selector: 'app-editar-muestra',
  imports: [
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './editar-muestra.component.html',
  styleUrl: './editar-muestra.component.css'
})
export class EditarMuestraComponent {
    editarMuestraForm: FormGroup;
    id: number = 0;

    // Snackbar
    private _snackBar = inject(MatSnackBar);

    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action);
    }

    constructor(private formBuilder: FormBuilder, private _muestraService: MuestraService, private route: ActivatedRoute) {
      this.editarMuestraForm = this.formBuilder.group({
        nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
        descripcion: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(250)]]
      });
    }

    ngOnInit(): void {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
    }


    async anadirMuestra() {
      try{
        var muestraOriginal: Muestra = await firstValueFrom(this._muestraService.getMuestra(this.id));
        var muestraNueva: Muestra = this.editarMuestraForm.value;

        if(muestraNueva.nombre != null || muestraNueva.nombre != ""){
          muestraOriginal.nombre = muestraNueva.nombre;
        }

        if(muestraNueva.descripcion != null || muestraNueva.descripcion != ""){
          muestraOriginal.descripcion = muestraNueva.descripcion;
        }

        const muestraModified = await firstValueFrom(this._muestraService.updateMuestra(this.id, muestraOriginal));
        this.openSnackBar("La muestra ha sido modificada con exito", "Aceptar")

      } catch (error) {
        this.openSnackBar("ERROR: La muestra no ha podido ser modificada", "Aceptar")

      }
    }



}
