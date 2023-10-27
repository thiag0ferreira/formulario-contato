import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Formulario} from "./formulario/formulario";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

   private API='http://localhost:3000/formulario'
  constructor(private http: HttpClient) { }

  enviar(formulario: Formulario): Observable<Formulario> {
    return this.http.post<Formulario>(this.API, formulario);
  }

    getFormularios(): Observable<Formulario[]>{
        return this.http.get<Formulario[]>(this.API);
    }

    obterMensagens() {

    }
}
