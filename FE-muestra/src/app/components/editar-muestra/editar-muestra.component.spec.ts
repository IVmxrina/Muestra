import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMuestraComponent } from './editar-muestra.component';

describe('EditarMuestraComponent', () => {
  let component: EditarMuestraComponent;
  let fixture: ComponentFixture<EditarMuestraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarMuestraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMuestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
