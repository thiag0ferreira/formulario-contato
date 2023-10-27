import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Formulario } from "./formulario";
import { FormularioService } from "../formulario.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefone: new FormControl('', [Validators.required]),
    endereco: new FormControl('', [Validators.required])
  });

  constructor(
    private service: FormularioService,
    private router: Router) {}

  ngOnInit(): void {}

  enviarFormulario() {
    if (this.formulario.valid) {
      console.log('Formulário válido, enviando dados...');
      let formValue = this.formulario.value;
      const formSave: Formulario = {
        nome: formValue.nome as string,
        email: formValue.email as string,
        telefone: formValue.telefone as string,
        endereco: formValue.endereco as string
      };


      this.service.enviar(formSave).subscribe(
        response => {
          console.log('Requisição POST bem-sucedida', response);
        },
        error => {
          console.error('Erro na requisição POST', error);
        }
      );

    }
  }

  getErrorMessage(field: string) {
    if (this.formulario.get(field)?.hasError('required')) {
      return 'Not a valid ' + field;
    }
    return null;
  }
}
