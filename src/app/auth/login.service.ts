import { Injectable } from '@angular/core';
import { BehaviorSubject, mergeMap, tap } from 'rxjs';
import { AuthService } from './auth.service';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  constructor( private authService: AuthService ) {
    const token = localStorage.getItem('token');
    this._isLoggedIn$.next(!!token);
   }
   logout(){
   
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        localStorage.removeItem('role');
        this.isLoggedIn = false;
       
        this._isLoggedIn$.next(false);
   }

  login(credentials: Login): any {
    return this.authService.login(credentials).pipe(tap(
      data => {
       

        this.isLoginFailed = false;
        this.isLoggedIn = true;
       
        this._isLoggedIn$.next(true);
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('userName', data.userName);
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('role', data.role);
        console.log(data)
      
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    ));
  }
  }