import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  formError = '';
  loginForm: FormGroup;
  erroLogin: boolean;
  
  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(form) {
  if( this.loginForm.valid) {
      this.authService.signInUser(
      form.controls['email'].value, 
      form.controls['password'].value)
      .subscribe(
        res => {
          localStorage.setItem('auth', JSON.stringify(res));
          this.authService.isLoggedIN.next(true);
            this.router.navigate(['/cabinet']);
          setTimeout(()=>{
            window.location.reload()
          },100);
        },
        error => {
          this.showError(error.error.detail);
          this.loading = false;
          this.erroLogin = true;
        },
        () => {
          this.loading = false;
          this.erroLogin = true;
        });
        
    }
  }
 ngAfterViewInit() {
    !function (d, s, id) {
      var js: any,
        fjs = d.getElementsByTagName(s)[0],
        p = 'https';
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + "://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
      }
    }
      (document, "script", "twitter-wjs");
  }

  showError(error: string) {
    this.formError = error;
    setTimeout(function () {
      this.formError = '';
    }.bind(this), 3000);
  }
}
