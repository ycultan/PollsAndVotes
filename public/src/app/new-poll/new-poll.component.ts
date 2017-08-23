import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-new-poll',
  templateUrl: './new-poll.component.html',
  styleUrls: ['./new-poll.component.css']
})
export class NewPollComponent implements OnInit {
  poll = {
    user: "",
    question: "",
    option1: {text: "", vote: 0},
    option2: {text: "", vote: 0},
    option3: {text: "", vote: 0},
    option4: {text: "", vote: 0}
  };
  constructor(private _api: ApiService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.poll.user = this._api.getUser().name;
  }

  onSubmit(){
    this._api.createPoll(this.poll);
  }
}
