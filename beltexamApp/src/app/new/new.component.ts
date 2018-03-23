import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BeltService } from '../belt.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newmessage = {
    name: "",
    desc: ""
  }
  exs:any;
  constructor(private _route: ActivatedRoute,private _router: Router, private _httpService: BeltService) { }

  ngOnInit() {

  }
  onsubmit(){
    let i = this._httpService.addmessage(this.newmessage);
    i.subscribe(data => {
      console.log(data['data'])
      if(data['message']=='Error'){
        this.exs = data
      }else{
        this.exs = ''
        this._router.navigate(['/Dashboard'])
        console.log(data['errors'])
      }
    })
    this.newmessage = {
      name: "",
      desc: ""
    }
  }

}