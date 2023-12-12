import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ValidationService } from 'src/app/services/validation.service';
import { AuthServicesService } from '../../services/auth-services.service';
import { Router } from '@angular/router';

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

  constructor(  private _validacionService: ValidationService,  private formBuilder: FormBuilder,private _snackBar: MatSnackBar,
    private _authService: AuthServicesService,  private router: Router,){
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
     return;
    }
    else
    {
      const form = this.form.value;
      this.loading=true;
      const json = {
        correo:this.form.get('correo')?.value,
        password:this.form.get('password')?.value
      };
      // console.log(json);

      this._authService.login(json).subscribe((res)=>{
        this.loading=false;
        // console.log(res);

        if(res.statusCode==200)
        {
          if(res.data.tipo_usuario=='admin')
          {
            localStorage.setItem('id',res.data._id);
            this.router.navigateByUrl('/app')
          }

        }
        else{
          this.openSnackBar(res.mensaje,"close");
        }
      });
    }

  }

  get(control: string) {
    return this.form.get(control);
  }

 openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      duration:2000
    });
  }

}
