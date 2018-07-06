import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpService } from './http.service';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { appConfig } from '../app.config';

@Injectable()
export class AuthService {

  urlOnlyForOauth = appConfig.apiOauth;
  apiUrl = appConfig.apiUrl;
  isLoggedIN = new BehaviorSubject(false);;

  constructor(
    private userService: UserService,
    private httpService: HttpService,
    private http: HttpClient,
  ) {
  
  }

  signInUser(email: string, password: string){
    return this.http.post(this.urlOnlyForOauth, {
      "data": {
        "type": "user",
        "attributes": {
          "login": email,
          "password": password
        }
      }
     } );
  }

  recoveryPassword(email: string){
    return this.http.post(`${this.apiUrl}/send-link-reset-password`, {
      email: email,
    });
  }

  newPassword(password: string, key: string) {
    return this.http.post(`${this.apiUrl}/change-password-by-link`, {
      password: password,
      key: key
    });
  }

  signUpUser(user) {
    return this.httpService.post('/user-register', user);
  }

  addData(url: string, body){
    return this.http.post('/' + url, body);
  }

  signOutUser() {
    const body = {
      // token: 'c49093d705bf107b406194c5d825e7e758eccce3',
      // token_type_hint: 'access_token'
    };

    localStorage.removeItem('auth');
    location.reload(true);
    return this.http.post(`${this.urlOnlyForOauth}/revoke`, body);
  }

  getUser(email) {
    return Observable.create(observer => {
      this.httpService.get(`/users?filter[0][type]=eq&filter[0][field]=email&filter[0][value]=${email}`)
        .subscribe( (res: any) => {
          const user = res && res.body && res.body._embedded && res.body._embedded.user && res.body._embedded.user[0];

          if (user) {
            this.userService.setUser(user);

            observer.next(true);
            observer.complete();
          } else {
            observer.error();
          }
        });
    });
  }

  isLogged() {
    let auth = JSON.parse(localStorage.getItem('auth'));
    let token = auth ? !!auth.data.attributes.token : false;
    this.isLoggedIN.next(token);
    return token;
  }
}
