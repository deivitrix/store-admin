import { Component, OnInit } from '@angular/core';
import { InputDataService } from '../services/input/input-data.service';

@Component({
  selector: 'app-base-product',
  templateUrl: './base-product.component.html',
  styleUrls: ['./base-product.component.css']
})
export class BaseProductComponent implements OnInit {

  add=true;
  list=false;
  constructor(private dataService:InputDataService){}

  ngOnInit() {
    this.informacion();
  }

  informacion(){
    if(this.add){
      const json={ tipo:'registro'}
      this.dataService.setInputData(json);
    }
  }

  add_pro(){
    this.add=true;
    this.list=false;

  }

  list_pro(){
    this.list=true;
    this.add=false;

  }

}
