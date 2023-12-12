import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoSesionGuard implements CanActivate {

  public constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    const id = localStorage.getItem('id');
    // const data=localStorage.getItem('data');

    if(id == null){
      localStorage.clear();
      this.router.navigateByUrl('/auth');
      return false;
    }else{
      return true;
    }
  }
}
