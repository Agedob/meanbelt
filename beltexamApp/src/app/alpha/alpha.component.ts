import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BeltService } from '../belt.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  list = []
  constructor(private _route: ActivatedRoute,private _router: Router, private _httpService: BeltService) { }

  ngOnInit() {
    this.fetch()
  }
  fetch(){
    let i = this._httpService.graball();
    i.subscribe(data => {
      console.log(data);
      this.list = data['data'];
    })
  }
  // make review func
    destroy(id){
      let i = this._httpService.destroyme(id);
      i.subscribe(data => {
        console.log(data);
      })
      this.fetch()
    }
}
