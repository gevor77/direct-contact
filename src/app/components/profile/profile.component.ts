import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() profile;
  // public profile = {};

  profiles: FormGroup;
  editpass: FormGroup;
  formError = '';
  erroLogin: boolean;
  loading = false;
  notyficationForm: FormGroup;
  public notyficationOpt = {};

  constructor(
    private router: Router,
    public formbuilder: FormBuilder,
    public http: HttpService,
    public authService: AuthService,
    private userService: UserService,
  ) { }

  onSubmit(name) {
    let cname = name.controls.companyCode.value;
    let ccode = name.controls.companyName.value;
    this.http.put('/profiles/' + JSON.parse(localStorage.getItem('auth')).user.id,
      {
        company_code: cname,
        company_name: ccode
      })
      .subscribe(profiles => {
        this.profile = profiles;
      });
  }

  ngOnInit() {
    this.profiles = new FormGroup({
      companyCode: new FormControl(),
      companyName: new FormControl(''),
    });

    this.editpass = new FormGroup({
      password: new FormControl('', Validators.required),
      confpas: new FormControl('', Validators.required),
    });

    this.notyficationForm = new FormGroup({
      notyficationOpt: new FormControl(),
    });

    this.http.get('/profiles/' + JSON.parse(localStorage.getItem('auth')).user.id)
      .subscribe((profile: any) => {
        this.profile = profile;
        this.profiles = new FormGroup({
          companyCode: new FormControl(),
          companyName: new FormControl(),
        });

      });

  }

  getNotification(t) {
    this.userService.updatNotyficationInfo(t, this.profile.body.id).subscribe(
      (profile: any) => {
        this.profile = profile;
      }
    )

  }

  change(pass) {
    let pas = pass.controls.password.value;
    let confpass = pass.controls.confpas.value;
    if (pas === confpass && confpass !== '' && pas !== '') {
      if (this.editpass.valid) {
        this.loading = false;
        this.http.put('/users/changepassword/' + JSON.parse(localStorage.getItem('auth')).user.id,
          { new_password: this.editpass.get('confpas').value })
          .subscribe(
            editpass => {
              this.loading = false;
            },
            error => {
              this.showError(error.error.detail);
            });
      }
    } else if (pas !== confpass) {
      this.erroLogin = true;
    }
  }

  showError(error: string) {
    this.formError = error;
    setTimeout(function () {
      this.formError = '';
    }.bind(this), 3000);
  }

}
