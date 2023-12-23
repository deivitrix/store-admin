import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagenService } from 'src/app/services/imagen/imagen.service';
import { UserService } from 'src/app/services/user/user.service';
import { environment } from 'src/environments/environment.development';
@Component({
  selector: 'app-navbarperfil',
  templateUrl: './navbarperfil.component.html',
  styleUrls: ['./navbarperfil.component.css']
})
export class NavbarperfilComponent implements OnInit {

  user:any;
  imagen:any;
  private url:string;
  notifications=false;
  item=4;
  not=false;

  constructor(private userService:UserService,private router: Router, private imagenService:ImagenService,
    ){
      this.url=environment.url;
  }

  ngOnInit() {
    this.perfil();
  }

  perfil(){


    const id=localStorage.getItem('id');
    // console.log(id);

    if(id!=null){
    this.userService.userOne(id).subscribe((res)=>{
      if(res.statusCode==200)
      {
        this.user=res.data;
        this.getimagen();
      }
      // console.log(res);
      else
      {
        this.router.navigateByUrl('/app')
      }

    });

    }
    else
    {
      this.router.navigateByUrl('/app')
    }
  }

  getimagen(){

  if(this.user!=null)
  {
    this.imagen=this.url+'imagen/'+this.user.imagen;
  }
  }

  toogle(){
    this.notifications=!this.notifications;
  }

  not_notification(){
    this.item--;
    if(this.item==0)
    {
      this.not=true;

    }
  }





}
