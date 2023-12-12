import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  open=false;

  menu=[
    { name:'Dashoard', icon:'dashboard'},
    { name:'User', icon:'manage_accounts'},
    { name:'Product', icon:'work'},
    { name:'Product', icon:'work'}
  ]
  ngOnInit(): void {

  }

  open_(){
    this.open=!this.open;
    // console.log(this.open);
  }

}
