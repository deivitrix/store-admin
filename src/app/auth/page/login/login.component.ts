import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide=true;
  loading=false;
  public form!: FormGroup;
  public submit = false;

  constructor(  private _validacionService: ValidationService,  private formBuilder: FormBuilder,private _snackBar: MatSnackBar){
  this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      correo: [
        '',
        [
          Validators.required,
          Validators.pattern(this._validacionService.expRegEmail()),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login(){
    this.loading=true;
    this.submit=true;

    if(this.form.invalid)
    {
     this.openSnackBar("Complete the form","close");
     this.loading=false;
    }

  }

  get(control: string) {
    return this.form.get(control);
  }

 openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      duration:1000
    });
  }

}
