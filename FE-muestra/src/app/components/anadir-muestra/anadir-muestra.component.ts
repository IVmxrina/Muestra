import { Component, OnInit } from '@angular/core';
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
    console.log("Enviando este objeto exacto a .NET:", objetoParaEnviar);

    const muestraAdded = await firstValueFrom(this._muestraService.addMuestra(objetoParaEnviar));

    console.log("¡Éxito total! Guardado en BD:", muestraAdded);
    this.form.reset(); // Limpiamos el formulario al terminar

  } catch (error) {
    console.error("Error al insertar la muestra desde Angular:", error);
  }
}

}
