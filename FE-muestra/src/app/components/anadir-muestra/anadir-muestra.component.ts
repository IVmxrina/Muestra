import { Component, OnInit } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-anadir-muestra',
  imports: [MatProgressSpinnerModule, MatCardModule, MatSelectModule, MatInputModule,  MatIconModule, MatDividerModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './anadir-muestra.component.html',
  styleUrl: './anadir-muestra.component.css'
})
export class AnadirMuestraComponent implements OnInit {
  isLoading: boolean = true;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  anadirMuestra() {
    console.log("Datos de la muestra:", this.form.value);
  }

}
