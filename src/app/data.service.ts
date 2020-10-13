import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Muppet } from './muppet';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  wontShowMuppet: Muppet;
  lazyMuppet: BehaviorSubject<Muppet>;
  willShowMuppet: BehaviorSubject<Muppet>;

  constructor() {
    this.lazyMuppet = new BehaviorSubject(null);
    this.willShowMuppet = new BehaviorSubject(null);
  }

  myMuppets = {
    grumpy: {
      name: "Grumpy",
      color: "Red",
      numberOfStrings: 20
    },
    lazy: {
      name: "Hanckock",
      color: "Green",
      numberOfStrings: 5
    }
  }
  
  getMyMuppets(){
    //Use setTimeout to Emulate the time it might take to return Data from an API
    setTimeout(() => {
      //Set No Show
      this.wontShowMuppet = this.myMuppets.grumpy
      //Set Lazy Late Bloomer
      this.lazyMuppet.next(this.myMuppets.lazy);
    }, 2500);
  }
}
