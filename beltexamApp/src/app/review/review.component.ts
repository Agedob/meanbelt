import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BeltService } from '../belt.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['../alpha/alpha.component.css']
})
export class ReviewComponent implements OnInit {
  id;
  me;
  list;

  constructor(private _route: ActivatedRoute,private _router: Router, private _httpservice: BeltService) { }
  
  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.id = (params['id']));
    this.search();
    // console.log(params['id'])
  }

  search(){
    console.log('searching...',this.id)
    let obs = this._httpservice.grabme(this.id);
    obs.subscribe(data => {
      this.me = data
      this.list = this.me['review']
    })
  }
}