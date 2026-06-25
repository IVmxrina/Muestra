import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarMuestraComponent } from './agregar-editar-muestra.component';

describe('AgregarEditarMuestraComponent', () => {
  let component: AgregarEditarMuestraComponent;
  let fixture: ComponentFixture<AgregarEditarMuestraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarEditarMuestraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarMuestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
