import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  confirmPass: FormGroup;
  public href: string = "";
  formError = '';
  loginForm: FormGroup;
  erroLogin: boolean;
  loading = false;
  currentURL = '';

  route: string;
  constructor(
    private formBuilder: FormBuilder,
    public http: HttpService,
    private router: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) { }

  confPass(pass) {
    let password = pass.controls.pwd.value;
    let confpassword = pass.controls.pwdconf.value;
    if (password === confpassword) {
      if (this.confirmPass.valid) {
        this.activatedRoute.queryParams.subscribe((params: Params) => {
          let email = params['email'];
          let token = params['token'];
          this.authService.newPassword(pass.controls['pwd'].value, email, token).subscribe(
            res => {
              localStorage.removeItem('auth');
              location.reload(true);
              this.authService.isLoggedIN.next(true);
              this.router.navigate(['/']);
            },
            error => {
              this.showError(error.error.detail);
              this.loading = false;
              this.erroLogin = true;
            })
        });
      }
    }else{
      this.erroLogin = true;
    }
  }

  ngOnInit() {
    this.confirmPass = new FormGroup({
      pwd: new FormControl('', Validators.required),
      pwdconf: new FormControl('', Validators.required),
    });

  }

  showError(error: string) {
    this.formError = error;
    setTimeout(function () {
      this.formError = '';
    }.bind(this), 3000);
  }

}
