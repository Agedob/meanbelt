import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class BeltService {

  constructor(private _http: HttpClient) { }
  graball(){
    return this._http.get('/restaurant');
  }
  grabme(id){
    return this._http.get('/restaurant/'+id);
  }
  addmessage(data){
    return this._http.post('/restaurant', data);
  }
  destroyme(id){
    return this._http.delete('/restaurant/delete/'+id)
  }
  update(id, data){
    // console.log(id,'>>>>>>>>',data)
    return this._http.put('/restaurant/'+id,data)
  }
  addreview(id,data){
    return this._http.post('/review/'+id,data)
  }
}
