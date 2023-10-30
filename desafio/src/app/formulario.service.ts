import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Formulario} from "./formulario/formulario";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private API='http://localhost:3000/formulario'
  constructor(private http: HttpClient) {  }

  enviar(formulario: Formulario): Observable<Formulario> {
    return this.http.post<Formulario>(this.API, formulario);
  }

  editar(formulario:Formulario): Observable<Formulario> {
      console.log('service',formulario)
    const url = `${this.API}/${formulario.id}`
    return  this.http.put<Formulario>(url,formulario)
  }

  buscarPorId(id:number):Observable<Formulario>{
    const url = `${this.API}/${id}`
    return this.http.get<Formulario>(url)
  }

    getFormularios(): Observable<Formulario[]>{
        return this.http.get<Formulario[]>(this.API);
    }

}
