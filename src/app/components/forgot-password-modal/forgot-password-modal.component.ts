import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

export interface DialogData {

}
@Component({
  selector: 'app-forgot-password-modal',
  templateUrl: './forgot-password-modal.component.html',
  styleUrls: ['./forgot-password-modal.component.css']
})
export class ForgotPasswordModalComponent implements OnInit {
  changePass: FormGroup;
  erroLogin: boolean;
  showField: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public http: HttpService,
    private authService: AuthService,
  ) { }

  onChangePassword(form) {
    if (this.changePass.valid) {
      this.showField = true;
      this.authService.recoveryPassword(form.controls['email'].value).subscribe(response => {
        this.erroLogin = false;
        this.showField = true;
      },
        (error) => {
          if (error.status === 400) {
            this.erroLogin = true;
            this.showField = false;
          }
        });
    }
  }

  ngOnInit() {
    this.changePass = new FormGroup({
      email: new FormControl('', Validators.required),
    });
  }

}
