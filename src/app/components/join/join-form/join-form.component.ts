import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-form',
  templateUrl: './join-form.component.html',
  styleUrls: ['./join-form.component.scss']
})
export class JoinFormComponent implements OnInit {

  tab="individual";
  constructor() { }

  ngOnInit(): void {
  }

  changeTab(tab){
    this.tab=tab;
  }
}
