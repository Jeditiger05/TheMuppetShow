import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Muppet } from '../muppet';

@Component({
  selector: 'app-my-mupetts',
  templateUrl: './my-mupetts.component.html',
  styleUrls: ['./my-mupetts.component.css']
})
export class MyMupettsComponent implements OnInit {

  num: number = 1;

  wontShowMuppet: Muppet;
  lazyMuppet: Muppet;

  constructor(private router: Router, private dataService: DataService) {
  }
  
  ngOnInit(): void {
  }
  
  getMuppet() {
    //get no show
    this.wontShowMuppet = this.dataService.wontShowMuppet;
    //get lazy
    this.dataService.lazyMuppet.subscribe(data => {
      this.lazyMuppet = data;
    })
  }
}
