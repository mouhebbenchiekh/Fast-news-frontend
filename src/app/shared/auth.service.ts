import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
                                               
@Injectable({                                               
  providedIn: 'root',                                               
})                                               
export class AuthService {                                               
  endpoint: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};                                               
                                               
  constructor(private http: HttpClient, public router: Router) {}

  // Sign-up                                               
  signUp(user: User): Observable<any> {                                               
    let api = `${this.endpoint}/users/addUser`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }

  // Sign-in
  signIn(user: User) {
    
    return this.http
      .post<any>(`${this.endpoint}/auth/login`, user)
      .subscribe((res: any) => {
        
        localStorage.setItem('access_token', res.accessToken);
        this.getUserProfile().subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(['profile']);
        });
      });
  }
//getoken
  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  //logout
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }

  // User profile
  getUserProfile(): Observable<any> {
    let api = `${this.endpoint}/auth/me`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
