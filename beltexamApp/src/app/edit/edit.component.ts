import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BeltService } from '../belt.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  me:any;
  editrestaurant = { restaurant:'', cuisine:''}
  exs;
  mesid;

  constructor(private _route: ActivatedRoute,private _router: Router, private _httpService: BeltService) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.mesid = (params['id']));
    this.search();
    // console.log(params['id'])
  }
  search(){
    console.log('searching for...'+ this.mesid)
    let obs = this._httpService.grabme(this.mesid);
    obs.subscribe(data => {
      this.me = data
      console.log(data['_id'])
    })
  }
  edit(){
    let obs = this._httpService.update(this.mesid, this.editrestaurant);
    obs.subscribe(data => {
      console.log(data['data'])
      if(data['message']=='Error'){
        this.exs = data['data']
        console.log(this.exs);
      }else{
        this.exs = ''
        this._router.navigate(['/Dashboard'])
      }
    })
  }
}
