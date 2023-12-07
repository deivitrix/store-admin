import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }
  expreRegNumber(){
    return /^([0-9])*$/;
  }

  expreRegDecima(){
    return /^\d*\.?\d*$/;
  }

  expRegLetter(){
    return /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/;
  }

  expRegEmail(){
    return /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  }

  expAlphanumeric(){
    return /^[a-zA-Z0-9\s]*$/;
  }

}
