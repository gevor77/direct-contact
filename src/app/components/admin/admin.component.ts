import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  @Input() profiles;
  data = new FormControl('', [Validators.required]);
  dataBalance = new FormControl('', [Validators.required]);
  selectdata = new FormControl('');
  constructor(
    public http: HttpService,
  ) { }

  ngOnInit() {
    this.http.get('/profiles/getallprofiles')
      .subscribe((profiles: any) => {
        this.profiles = profiles.body;             
      });
  }

  vNotification(ids) {
    let selvalue = this.selectdata.value;
    this.http.put('/profiles/' + ids,
      {
        admin: true,
        tariff_plan: selvalue,
      }).subscribe()
  }

  inputData(id) {
    let d = this.data.value
    this.http.put('/profiles/' + id,
      {
        admin: true,
        count_non_tarrif_sms: d,
      }).subscribe()
  }

  changeDate(id, b) {
    let date = b.value;
    console.log(id, date);
    this.http.put('/profiles/' + id,
      {
        admin: true,
        tariif_paid_to: date,
        id_user: id
      }).subscribe()
  }

  changeBalance(id) {
    let balance = this.dataBalance.value;
    this.http.put('/profiles/' + id,
      {
        admin: true,
        balance: balance,
        id_user: id
      }).subscribe()
  }

}
