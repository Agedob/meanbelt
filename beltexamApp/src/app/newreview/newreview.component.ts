import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BeltService } from '../belt.service';

@Component({
  selector: 'app-newreview',
  templateUrl: './newreview.component.html',
  styleUrls: ['./newreview.component.css']
})
export class NewreviewComponent implements OnInit {
  id;
  me;
  exs:any;
  exs2:any;
  newreview = {
    cont:"",
    name:"",
    stars:1
  }

  constructor(private _route: ActivatedRoute,private _router: Router, private _httpService: BeltService) { }
  
  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.id = (params['id']));
    this.search();
    // console.log(params['id'])
  }

  search(){
    console.log('searching...',this.id)
    let obs = this._httpService.grabme(this.id);
    obs.subscribe(data => {
      this.me = data
      console.log(this.me)
    })
  }
  onsubmit(){
    let i = this._httpService.addreview(this.id, this.newreview);
    i.subscribe(data => {
      if(data['message']=='Error'){
        console.log(data['data'].errors['review.2.cont'])
        this.exs = ''
        this.exs2 = ''
        this.exs = data['data'].errors['review.2.cont'].message
        this.exs2 = data['data'].errors['review.2.customer'].message
      }else{
        this.exs = ''
        this._router.navigate(['/review/'+this.id])
        console.log("errors in else", data) //success so no errors
      }
    })
    this.newreview = {
      cont:"",
      name:"",
      stars:1
    }
  }
}