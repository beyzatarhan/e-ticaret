import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AccountService } from '../services/account.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private accountService: AccountService, private rooter: Router) {}
  canActivate(roote: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    let logged = this.accountService.isLoggedIn();
    if(logged){
        return true;
    }
    this.rooter.navigate(["login"]);
    return false;
  }
}
