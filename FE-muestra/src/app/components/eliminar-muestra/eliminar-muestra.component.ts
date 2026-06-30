import { Component } from '@angular/core';
import { MuestraService } from '../../services/muestra.service';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-eliminar-muestra',
  imports: [RouterLink],
  templateUrl: './eliminar-muestra.component.html',
  styleUrl: './eliminar-muestra.component.css'
})
export class EliminarMuestraComponent {
  id: number = 0;

  constructor(private _muestraService: MuestraService, private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  async eliminarMuestra() {
    try{
      const response = await firstValueFrom(this._muestraService.deleteMuestra(this.id));
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

}
