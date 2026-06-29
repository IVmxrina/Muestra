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
  dataSource = new MatTableDataSource<Muestra>();

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
      const data = await firstValueFrom(this._muestraService.getMuestras());
      this.muestras = data;
      this.dataSource.data = this.muestras;
    } catch (error) {
      console.error('Error al obtener las muestras:', error);
    }
  }

  check(id: number){
    console.log(id);
  }



}

