import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BeltService } from '../belt.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newrestaurant = {
    restaurant: "",
    cuisine: ""
  }
  exs:any;
  constructor(private _route: ActivatedRoute,private _router: Router, private _httpService: BeltService) { }

  ngOnInit() {

  }
  onsubmit(){
    let i = this._httpService.addmessage(this.newrestaurant);
    i.subscribe(data => {
      console.log(data['data'])
      if(data['message']=='Error'){
        console.log("error in first if", data['data'])
        this.exs = ''
        this.exs = data['data']
      }else{
        this.exs = ''
        this._router.navigate(['/Dashboard'])
        console.log("errors in else", data) //success so no errors
      }
    })
    this.newrestaurant = {
      restaurant: "",
      cuisine: ""
    }
  }

}