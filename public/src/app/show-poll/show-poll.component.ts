import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs';

@Component({
  selector: 'app-show-poll',
  templateUrl: './show-poll.component.html',
  styleUrls: ['./show-poll.component.css']
})
export class ShowPollComponent implements OnInit {
  poll = [];
  constructor(private _api: ApiService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getPoll();
    // console.log(this.poll);
  }

  getPoll(){
    this._route.paramMap
    .switchMap(params => {
      return this._api.getOnePoll(params.get('id'))
    })
    .subscribe(data => this.poll = [data])
  }

  onClick1(id){
    this._api.addVote1(id);
    this.getPoll();
  }
  onClick2(id){
    this._api.addVote2(id);
    this.getPoll();
  }
  onClick3(id){
    this._api.addVote3(id);
    this.getPoll();
  }
  onClick4(id){
    this._api.addVote4(id);
    this.getPoll();
  }
}
