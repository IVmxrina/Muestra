import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMuestraComponent } from './eliminar-muestra.component';

describe('EliminarMuestraComponent', () => {
  let component: EliminarMuestraComponent;
  let fixture: ComponentFixture<EliminarMuestraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarMuestraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarMuestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
