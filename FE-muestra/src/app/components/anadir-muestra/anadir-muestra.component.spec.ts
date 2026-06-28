import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirMuestraComponent } from './anadir-muestra.component';

describe('AnadirMuestraComponent', () => {
  let component: AnadirMuestraComponent;
  let fixture: ComponentFixture<AnadirMuestraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnadirMuestraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnadirMuestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
