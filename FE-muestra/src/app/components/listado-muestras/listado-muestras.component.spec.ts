/// <reference types="jest" />
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoMuestrasComponent } from './listado-muestras.component';

describe('ListadoMuestrasComponent', () => {
  let component: ListadoMuestrasComponent;
  let fixture: ComponentFixture<ListadoMuestrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoMuestrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoMuestrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
