import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lampara',
  templateUrl: './lampara.component.html',
  styleUrls: ['./lampara.component.css']
})
export class LamparaComponent implements OnInit {
@Input () lampara:any
  constructor() { }

  ngOnInit(): void {
    console.log("!!!!!!!!",this.lampara)
  }

}
