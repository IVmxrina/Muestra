import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { Muestra } from '../../interfaces/muestra';
import { RouterModule } from '@angular/router';
import { MuestraService } from '../../services/muestra.service';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';


/**
 * @title Table with pagination
 */
@Component({
  selector: 'listado-muestras',
  styleUrl: 'listado-muestras.component.css',
  templateUrl: 'listado-muestras.component.html',
  imports: [MatTableModule, MatPaginatorModule, MatInputModule, MatIconModule, RouterModule],
})
export class ListadoMuestrasComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'acciones'];
  dataSource = new MatTableDataSource<Muestra>(ELEMENT_DATA);

  muestras: Muestra[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _muestraService: MuestraService) {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.obtenerMuestras();
  }

  async obtenerMuestras() {
    try {
      // 👇 'data' hereda automáticamente el tipo Muestra[] gracias al servicio
      const data = await firstValueFrom(this._muestraService.getMuestras());
      this.muestras = data;
      console.log(this.muestras);
    } catch (error) {
      console.error('Error al obtener las muestras:', error);
    }
  }



}

const ELEMENT_DATA: Muestra[] = [
  {id: 1, nombre: 'Muestra 01', descripcion: "Esta es la muestra 01"},
  {id: 2, nombre: 'Muestra 02', descripcion: "Esta es la muestra 02"},
  {id: 3, nombre: 'Muestra 03', descripcion: "Esta es la muestra 03"},
  {id: 4, nombre: 'Muestra 04', descripcion: "Esta es la muestra 04"},
  {id: 5, nombre: 'Muestra 05', descripcion: "Esta es la muestra 05"},
  {id: 6, nombre: 'Muestra 06', descripcion: "Esta es la muestra 06"},
  {id: 7, nombre: 'Muestra 07', descripcion: "Esta es la muestra 07"},
  {id: 8, nombre: 'Muestra 08', descripcion: "Esta es la muestra 08"},
  {id: 9, nombre: 'Muestra 09', descripcion: "Esta es la muestra 09"},
  {id: 10, nombre: 'Muestra 10', descripcion: "Esta es la muestra 10"},
  {id: 11, nombre: 'Muestra 11', descripcion: "Esta es la muestra 11"},
  {id: 12, nombre: 'Muestra 12', descripcion: "Esta es la muestra 12"},
  {id: 13, nombre: 'Muestra 13', descripcion: "Esta es la muestra 13"},
  {id: 14, nombre: 'Muestra 14', descripcion: "Esta es la muestra 14"},
  {id: 15, nombre: 'Muestra 15', descripcion: "Esta es la muestra 15"},
  {id: 16, nombre: 'Muestra 16', descripcion: "Esta es la muestra 16"},
  {id: 17, nombre: 'Muestra 17', descripcion: "Esta es la muestra 17"},
  {id: 18, nombre: 'Muestra 18', descripcion: "Esta es la muestra 18"},
  {id: 19, nombre: 'Muestra 19', descripcion: "Esta es la muestra 19"},
  {id: 20, nombre: 'Muestra 20', descripcion: "Esta es la muestra 20"},
];
