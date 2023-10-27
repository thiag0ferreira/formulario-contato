import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFormularioComponent } from './lista-formulario.component';

describe('ListaFormularioComponent', () => {
  let component: ListaFormularioComponent;
  let fixture: ComponentFixture<ListaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
