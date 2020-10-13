import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Muppet } from './muppet';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  wontShowMuppet: Muppet;
  lazyMuppet: BehaviorSubject<Muppet>;

  constructor() {
    this.lazyMuppet = new BehaviorSubject(null);
  }
  
  getMyMuppets(){
    //Use setTimeout to Emulate the time it might take to return Data from an API
    setTimeout(() => {
      //Set No Show
      this.wontShowMuppet = {
        name: "Grumpy",
        color: "Red",
        numberOfStrings: 20
      }
      //Set Lazy Late Bloomer
      this.lazyMuppet.next({
        name: "Hanckock",
        color: "Green",
        numberOfStrings: 5
      })
    }, 5000);
    
  }

}
