import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataArrayService } from '../dataArray.service';
import { Muppet } from '../muppet';

@Component({
  selector: 'app-my-muppets-array',
  templateUrl: './my-array-mupetts.component.html',
  styleUrls: ['./my-array-mupetts.component.css']
})
export class MyArrayMupettsComponent implements OnInit {

  muppetArray: Muppet[]

  constructor(private router: Router, private DataArrayService: DataArrayService) { 
    this.DataArrayService.muppetArray.subscribe((muppetArray) => {
      this.muppetArray = muppetArray;
    });
  }

  getMuppet() {
    this.DataArrayService.getMyMuppets();
  }

  ngOnInit(): void {
  }
}
