import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ExportAsXLSXService } from '../../services/export-as-xlsx.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit {
  @Input() message = {};

  public messages = [];
  public allMessages = [];
  public unfmessage = [];
  public newdatepicker = [];
  public myMessageFilter = 'all';
  public myAnswer = 'allm';
  public myFilter;
  profiles: any = {};
  fbrands: FormGroup;
  clientallmessages: FormGroup;
  downloadReport: FormGroup;

  constructor(
    public http: HttpService,
    private xlsxservice: ExportAsXLSXService,
  ) {

  }

  allbrands() {
      this.myMessageFilter = this.fbrands.get('fbrandIcons').value;      
  }

  messagedata() {
    this.myAnswer = this.clientallmessages.get('dataAllmessage').value;    
  }

  download(): void {
    let start = new Date(this.downloadReport.get('dateStart').value);
    let end = new Date(this.downloadReport.get('dateEnd').value);
    let newMessages = this.messages.filter(m => {
      const mDate = new Date(m.message.date_sent);
      return mDate >= start && mDate <= end;
    });
    for (let i = 0; i < newMessages.length; i++) {
      newMessages[i] = newMessages[i].message;
    }

    this.xlsxservice.exportAsExcelFile(newMessages, 'sample');
  }

  ngOnInit() {
    this.http.get('/messages/usermessages')
      .subscribe(
        (messages: any) => {
          messages.body.forEach(element => {            
            element = element.filter(a => {
              return a.reply === 0
            });
            this.messages.push(element);
            this.allMessages.push(element);
            this.unfmessage.push(element);
          }); 

    })

    this.http.get('/profiles/' + JSON.parse(localStorage.getItem('auth')).user.id)
      .subscribe((profiles: any) => {
        this.profiles = profiles.body;     
    });

    this.fbrands = new FormGroup({
      fbrandIcons: new FormControl(),
    })

    this.clientallmessages = new FormGroup({
      dataAllmessage: new FormControl(),
    })

    this.downloadReport = new FormGroup({
      dateStart: new FormControl(),
      dateEnd: new FormControl(),
      restName: new FormControl(),
    })
  }

}
