import { Component, inject, OnInit } from '@angular/core';
import { Muestra } from '../../interfaces/muestra';
import { MuestraService } from '../../services/muestra.service';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import {RouterLink} from "@angular/router";
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-ver-muestra',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './ver-muestra.component.html',
  styleUrl: './ver-muestra.component.css'
})

export class VerMuestraComponent implements OnInit {
    muestra: Muestra = {
      id: 0,
      nombre: '',
      descripcion: ''
    };
    id: number = 0;

    // Snackbar
  private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  constructor(private _muestraService: MuestraService,  private aRoute: ActivatedRoute) {
      this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    }

  ngOnInit(): void {
    this.obtenerMuestra();
  }

  async obtenerMuestra() {
    try{

      const data = await firstValueFrom(this._muestraService.getMuestra(this.id));
      this.muestra = data;
    } catch (error) {
      this.openSnackBar("ERROR: La muestra no ha podido ser mostrada", "Aceptar")

    }

  }

}
