import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  url = "http://localhost:3000/clientes";

  constructor(private _http:HttpClient) { }
 
   getClientes(){
     return this._http.get(this.url);
   }
 
    postCliente(cliente:any){
      return this._http.post(this.url,cliente);
    }
 
    deleteCliente(id:any){
      return this._http.delete(this.url+"/"+id);
    }
 
    putCliente(cliente:any){
      return this._http.put(this.url+"/"+cliente.id,cliente);
    }
 
    getById (id:any){
      return this._http.get(this.url + "/" + id);
    }
  }