import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class BeltService {

  constructor(private _http: HttpClient) { }
  graball(){
    return this._http.get('/message');
  }
  grabme(id){
    return this._http.get('/message'+id);
  }
  addmessage(data){
    return this._http.post('/message', data);
  }
  destroyme(id){
    return this._http.delete('/message/delete/'+id)
  }
}
