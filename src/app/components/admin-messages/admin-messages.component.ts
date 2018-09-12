import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin-messages',
  templateUrl: './admin-messages.component.html',
  styleUrls: ['./admin-messages.component.css']
})
export class AdminMessagesComponent implements OnInit {
  @Input() profiles;
  adminprofile = <any>{};
  id: number;
  public company_name;
  constructor(
    public http: HttpService,
    private activatedRoute: ActivatedRoute,
    public userservices: UserService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      this.userservices.getProfileInfo(this.id).subscribe(
        (prof: any) => {
          this.adminprofile = prof.body;
        });
    });

    this.http.get('/profiles/' + this.id + '/messages')
      .subscribe((profil: any) => {
        this.profiles = profil.body;     
      });
      
  }

}
