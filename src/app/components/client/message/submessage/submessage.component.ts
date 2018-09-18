import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HttpService } from '../../../../services/http.service';
import { UserService } from '../../../../services/user.service';
@Component({
  selector: 'app-submessage',
  templateUrl: './submessage.component.html',
  styleUrls: ['./submessage.component.css']
})
export class SubmessageComponent implements OnInit {
  @Input() message;

  questions: FormGroup;
  cabinet: FormGroup;
  public addTextMessage;
  status: boolean = false;
  public messages = [];
  public selectIcons = {};
  public addText;
  public selected = '';

  constructor(
    public http: HttpService,
    public formbuilder: FormBuilder,
    private userService: UserService, ) { }

  onIcons(ev) {
    this.userService.updateMessagesInfo(ev, this.message.id)
      .subscribe(
        (response: any) => {
          this.message.status = ev;
        });
  }

  addMessage() {
    this.status = !this.status;
  }

  addComment(id) {
    this.http.post('/messages', {
      address: '',
      body: this.cabinet.get('addText').value,
      id_user: JSON.parse(localStorage.getItem('auth')).user.id,
      received_type: 'asde3',
      service_center: 'Message from Web.',
      type: 'outgoing',
      reply: id,
    }).subscribe((response: any) => {
      if (response.body.status == 'OK') {
        this.message.reply = {
          body: this.cabinet.get('addText').value,
          id_user: JSON.parse(localStorage.getItem('auth')).user.id,
          reply: id,
          type: 'outgoing',
          address: '',
          service_center: '0',
          received_type: 'asde3',
        }
      }
    });
  }

  ngOnInit() {
    this.cabinet = this.formbuilder.group({
      addText: ['', Validators.required],
    });
    this.questions = new FormGroup({
      selectIcons: new FormControl(),
    });
  }

  addForm() {
    this.cabinet = this.formbuilder.group({
      addText: [this.addTextMessage.body, Validators.required],
    });
  }

}
