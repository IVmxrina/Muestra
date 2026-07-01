import {AfterViewInit, Component, inject, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { Muestra } from '../../interfaces/muestra';
import { RouterModule } from '@angular/router';
import { MuestraService } from '../../services/muestra.service';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';


/**
 * @title Table with pagination
 */
@Component({
  selector: 'listado-muestras',
  styleUrl: 'listado-muestras.component.css',
  templateUrl: 'listado-muestras.component.html',
  imports: [CommonModule, MatProgressSpinnerModule, MatTableModule, MatPaginatorModule, MatInputModule, MatIconModule, RouterModule],
})
export class ListadoMuestrasComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'acciones'];
  dataSource = new MatTableDataSource<Muestra>();
  visible: boolean = false;
  muestras: Muestra[] = [];

  // Snackbar
  private _snackBar = inject(MatSnackBar);

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000
    });
  }

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
      this.visible = true;
    } catch (error) {
      this.visible = true;
      this.openSnackBar("ERROR: Las muestras no han podido ser obtenidas", "Aceptar");

    }
  }

  check(id: number){
    console.log(id);
  }



}

