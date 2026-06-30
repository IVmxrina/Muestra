import { Component, inject, OnInit } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { firstValueFrom } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

import { MuestraService } from '../../services/muestra.service';
import { Muestra } from '../../interfaces/muestra';


@Component({
  selector: 'app-anadir-muestra',
  imports: [MatProgressSpinnerModule, MatCardModule, MatSelectModule, MatInputModule, MatIconModule, MatDividerModule, MatButtonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './anadir-muestra.component.html',
  styleUrl: './anadir-muestra.component.css'
})
export class AnadirMuestraComponent implements OnInit {
  isLoading: boolean = true;
  form: FormGroup;
  muestra!: Muestra;

  // Snackbar
  private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }



  constructor(private fb: FormBuilder, private _muestraService:MuestraService) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
    })
   }

  ngOnInit(): void {

  }

  async anadirMuestra() {
  if (this.form.invalid) {
    return; // Evitamos enviar si el formulario no es válido
  }

  // CONSTRUCCIÓN MANUAL: Asegura un formato ultra limpio para .NET
  const objetoParaEnviar: Muestra = {
    id: 0,
    nombre: this.form.get('nombre')?.value,
    descripcion: this.form.get('descripcion')?.value,
    // fechaCreacion NO se pone aquí, ya que .NET la acepta como opcional (DateTime?)
  };

  try {

    const muestraAdded = await firstValueFrom(this._muestraService.addMuestra(objetoParaEnviar));

    this.openSnackBar("La muestra ha sido añadida con exito", "Aceptar")

    this.form.reset();

  } catch (error) {
    this.openSnackBar("ERROR: La muestra no ha podido ser añadida", "Aceptar");
  }
}

}
