import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LamparasService {
 url = "http://localhost:3000/lamparas";

 constructor(private _http:HttpClient) { }

  getLamparas(){
    return this._http.get(this.url);
  }

   postLampara(lampara:any){
     return this._http.post(this.url,lampara);
   }

   deleteLampara(id:number){
     return this._http.delete(this.url+"/"+id);
   }

   putLampara(lampara:any){
     return this._http.put(this.url+"/"+lampara.id,lampara);
   }

   getById (id:number){
     return this._http.get(this.url + "/" + id);
   }
}
