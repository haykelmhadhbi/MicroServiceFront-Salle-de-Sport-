import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const accessToken = localStorage.getItem('access_token');

    if (accessToken) {
        return true;
      // Un jeton d'accès est présent dans le localStorage, autorise l'accès à la route.
    } else {
      this.router.navigateByUrl("login")
       //window.location.href="http://localhost:4200/#/login"
    }
  }
}
