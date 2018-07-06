import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public isLoggedIn;

constructor(
  public auth: AuthService,
  public router: Router
){

}
  ngOnInit() {
    this.auth.isLogged();
    this.auth.isLoggedIN.subscribe(l => {
      this.isLoggedIn = l;
      if(l == false) {
        this.router.navigate(['']);
      }else{
        this.router.navigate(['cabinet']);
      }
    });
  }
  logout() {
    this.auth.signOutUser().subscribe();
    
  }
  
}
