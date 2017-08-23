import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ApiService {
  user = {
    name: ""
  }
  constructor(private _http: Http) { }

  login(user){
    console.log(user);
    this.user = user;
  }

  getUser(){
    return this.user;
  }

  getAllPolls(){
    return this._http.get('/polls')
    .map(data => data.json())
    .toPromise();
  }

  createPoll(poll){
    this._http.post('/polls', poll)
    .map(data => data.json())
    .toPromise();
  }

  getOnePoll(id){
    return this._http.get('/polls/' + id)
    .map(data => data.json())
    .toPromise();
  }

  addVote1(id){
    this._http.get('/pollsOption1/' + id)
    .map(data => data.json())
    .toPromise();
  }
  addVote2(id){
    this._http.get('/pollsOption2/' + id)
    .map(data => data.json())
    .toPromise();
  }
  addVote3(id){
    this._http.get('/pollsOption3/' + id)
    .map(data => data.json())
    .toPromise();
  }
  addVote4(id){
    this._http.get('/pollsOption4/' + id)
    .map(data => data.json())
    .toPromise();
  }

  deletePoll(id){
    this._http.get('/polls/delete/' + id)
    .map(data => data.json())
    .toPromise();
  }
}
