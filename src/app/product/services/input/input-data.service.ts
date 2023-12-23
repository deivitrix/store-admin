import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputDataService {
  private inputData: any;
  constructor() { }

  setInputData(data: any) {
    this.inputData = data;
  }

  getInputData() {
    return this.inputData;
  }
}
