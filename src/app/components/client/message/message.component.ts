import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnChanges {
  @Input() messages;
  @Input() filter;
  @Input() unfilter;
  profiles = {};
  public profile = {};
  public displayMessages;
  public toDisplay;


  constructor(
    public http: HttpService,
    public formbuilder: FormBuilder,
    private userService: UserService,
    
  ) { }

  ngOnInit() {
    this.displayMessages = this.messages;
    this.http.get('/profiles/' + JSON.parse(localStorage.getItem('auth')).user.id)
      .subscribe((profiles: any) => {
        this.profiles = profiles.body;
      });
    }

    ngOnChanges() {
      if(this.filter != 'all' && this.unfilter != 'allm') {
        this.displayMessages = this.messages.filter(a => { 
          return a.status === this.filter && a.replies.length === 0;
        })
      } else if(this.filter == 'all' && this.unfilter != 'allm') {
        this.displayMessages = this.messages.filter(a => {    
         return a.replies.length === 0;
        })
      } else if(this.filter != 'all' && this.unfilter == 'allm'){
        this.displayMessages = this.messages.filter(a => {   
          return a.status === this.filter;
        })
      } else {
        this.displayMessages = this.messages;
      }   
      this.displayMessages.length > 0 ? this.toDisplay = true : this.toDisplay = false;

    }

}
