import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public phoneNumber;
  public courds;
  private password;
  public profile;

  profiles: FormGroup;

  constructor(
    public formbuilder: FormBuilder,
    public http: HttpService,
    public authservice: AuthService,
  ) { }

  onSubmit() {
    this.http.put('/profiles/view/6', {
      "data": {
        "type": "profile",
        "attributes": this.profiles.value
      }
    }).subscribe();
  }

  ngOnInit() {
    this.profiles = this.formbuilder.group({
      phoneNumber: ['', Validators.required],
      courds: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.http.get('/profiles/view/6').subscribe(profile => {
      this.profile = profile;
      this.createForm();
    });
  }

  createForm() {
    this.profiles = this.formbuilder.group({
      phoneNumber: [this.profile.phone_number, Validators.required],
      courds: [this.profile.coordinates, Validators.required],
      password: [this.profile.password, Validators.required],
    });
  }

}
