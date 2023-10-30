import { Component, OnInit } from '@angular/core';
import {Formulario} from "../formulario/formulario";
import {FormularioService} from "../formulario.service";
import {ActivatedRoute, Router} from "@angular/router";



@Component({
  selector: 'app-lista-formulario',
  templateUrl: './lista-formulario.component.html',
  styleUrls: ['./lista-formulario.component.css']
})
export class ListaFormularioComponent implements OnInit {

    exibir:boolean = false;
    listaFormulario:Formulario[] =[];
    formulario: Formulario={
      id:0,
      nome:'',
      email:'',
      telefone:'',
      endereco:''
    }


  constructor(private service: FormularioService,
              private router: Router,
              private route: ActivatedRoute,

  ) {
    this.router = router;
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

    }




}
