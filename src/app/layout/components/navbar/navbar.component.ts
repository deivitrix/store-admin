import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router){

  }
  ngOnInit(): void {

  }

  open_(){
    this.open=!this.open;
    // console.log(this.open);
  }

  Logout(){
    localStorage.clear();
      this.router.navigateByUrl('/auth/login');
  }

}
