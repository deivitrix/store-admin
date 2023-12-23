import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-contenido',
  templateUrl: './card-contenido.component.html',
  styleUrls: ['./card-contenido.component.css']
})
export class CardContenidoComponent implements OnInit {
  @Input () card!:any;

  ngOnInit() {

  }


}
