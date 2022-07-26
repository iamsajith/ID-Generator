import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _auth: AuthService, private route: Router) {}
  canActivate(): boolean {
    if (this._auth.isLoggedIn()) {
      return true;
    } else {
      this.route.navigate(['/']);
      return false;
    }
  }
}
