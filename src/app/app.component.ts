import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ForgotPasswordModalComponent } from './components/forgot-password-modal/forgot-password-modal.component';
import { FacebookService, InitParams } from 'ngx-facebook';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected = 'option2';
  title = 'app';
  public isLoggedIn;
  public userId;
  constructor(
    public auth: AuthService,
    public router: Router,
    public dialog: MatDialog,
    private fb: FacebookService,
    public http:HttpService,
  ) {
    let initParams: InitParams = {
      appId: 'directcontact.am',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);

  }

  openDialog() {
    this.dialog.open(ForgotPasswordModalComponent, {});
  }
  
  
  ngOnInit() {
    this.auth.isLogged();
    this.auth.isLoggedIN.subscribe(l => {
      this.isLoggedIn = l;      
      if (l == false && this.router.url !== 'change-password') {
        // this.router.navigate(['']);        
      }else{
        // this.router.navigate(['']);
      }
    });    
    this.userId = JSON.parse(localStorage.getItem('auth')).user.id;
  }
  
  logout() {
    this.auth.signOutUser().subscribe();
  }

}
