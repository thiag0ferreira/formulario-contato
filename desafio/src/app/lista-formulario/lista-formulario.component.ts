import { Component, OnInit } from '@angular/core';
import {Formulario} from "../formulario/formulario";
import {FormularioService} from "../formulario.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-lista-formulario',
  templateUrl: './lista-formulario.component.html',
  styleUrls: ['./lista-formulario.component.css']
})
export class ListaFormularioComponent implements OnInit {

    exibir:boolean = false;
    listaFormulario:Formulario[] =[];

  constructor( private service: FormularioService) {
  }

  ngOnInit(): void {

  }

    exibirTabela(){
    this.exibir = !this.exibir;
    if (this.exibir === true) {
        this.buscarTodos();
    }
    }

  buscarTodos(): Formulario[] {
    this.service.getFormularios().subscribe(
        response => {
            console.log('Requisição POST bem-sucedida', response);
            this.listaFormulario = response;

        },
        error => {
            console.error('Erro na requisição POST', error);
        }
    );
    return this.listaFormulario;
  }


  editar(item: Formulario) {
    console.log(item)
    item.nome= "mudei";
    this.service.editar(item).subscribe(
      response => {
        console.log('Requisição PUT bem-sucedida', response);
      },
      error => {
        console.error('Erro na requisição PUT', error);
      }
    );

  }
}
