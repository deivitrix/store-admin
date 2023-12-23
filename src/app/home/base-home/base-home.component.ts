import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-home',
  templateUrl: './base-home.component.html',
  styleUrls: ['./base-home.component.css']
})
export class BaseHomeComponent implements OnInit {

card1:any;
card2:any;
card3:any;
card4:any;
chart1:any;
chart2:any;

  constructor(){

  }
  ngOnInit(): void {
this.obtener_card1();
this.obtener_card2();
this.obtener_card3();
this.obtener_card4();
this.chart_1();
this.chart_2();
  }

  obtener_card1(){
    this.card1={
    title:'Orders Received',
    icon:'add_shopping_cart',
    color:'linear-gradient(to right, #1d976c, #93f9b9)',
    amount:500,
    descripcion:'18% Más alta que el último mont'
    };
  }
  obtener_card2(){
    this.card2={
    title:'Delivered',
    icon:'work_outline',
    color:'linear-gradient(to right, #373b44, #4286f4)',
    amount:865,
    descripcion:'27% Más alta que el último mont'
    };
  }
  obtener_card3(){
    this.card3={
    title:'New Orders',
    icon:'trending_up',
    color:'linear-gradient(to right, #fc4a1a, #f7b733)',
    amount:128,
    descripcion:'37% Más alta que el último mont'
    };
  }
  obtener_card4(){
    this.card4={
    title:'Total Earning',
    icon:'attach_money',
    color:'linear-gradient(to right, #2193b0, #6dd5ed)',
    amount:13254,
    descripcion:'37% Más alta que el último mont'
    };
  }


  chart_1(){
  this.chart1={
    id:'myChart',
    title:"Orders Received",
    data:[10, 15, 8, 12, 18,25,50],
    borderColor:'green'

  }
  }

  chart_2(){
    this.chart2={
      id:'myChart1',
      title:'Total Earning',
      data:[5, 20, 4, 25, 15,28,75],
      borderColor:'blue'
    }
    }


}
