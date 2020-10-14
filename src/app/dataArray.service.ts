import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Muppet } from './muppet';

@Injectable({
  providedIn: 'root'
})

export class DataArrayService {

  wontShowMuppet: Muppet;
  lazyMuppet: Muppet;
  willShowMuppet: Muppet;
  muppetArray: BehaviorSubject<Muppet[]>;

  constructor() {
    this.muppetArray = new BehaviorSubject(null);
  }

  myMuppets = {
    grumpy: {
      name: "Arber",
      color: "#fcd0d8",
      numberOfStrings: 20
    },
    lazy: {
      name: "Masimo",
      color: "#cef8e0",
      numberOfStrings: 5
    },
    other: {
      name: "Yeff Yeggs",
      color: "#9dc2f1",
      numberOfStrings: 300
    } 
  }

  muppetArrayData = [];
  getMyMuppets() {
    setTimeout(() => {
      //Set No Show
      this.wontShowMuppet = this.myMuppets.grumpy
      this.muppetArrayData.push(this.wontShowMuppet);
      this.muppetArray.next(this.muppetArrayData);
    }, 2500);

    setTimeout(() => {
      //Set Lazy Late Bloomer
      this.lazyMuppet = this.myMuppets.lazy;
      this.muppetArrayData.push(this.lazyMuppet);
      this.muppetArray.next(this.muppetArrayData);
    }, 1000);

    setTimeout(() => {
      //Set the other one
      this.willShowMuppet = this.myMuppets.other;
      this.muppetArrayData.push(this.willShowMuppet);
      this.muppetArray.next(this.muppetArrayData);
    }, 2000);
  }

}
