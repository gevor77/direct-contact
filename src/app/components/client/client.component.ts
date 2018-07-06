import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
public messages = [];
  constructor() { }



  ngOnInit() {
    this.messages = [
      {
        "address": "+37494091185",
        "body": "*code5* Herllo ",
        "date_sent": "2018-06-28 00:00:00",
        "date": "2018-06-28 00:00:00",
        "read": 0,
        "seen": 0,
        "status": 0,
        "type": "unsorted",
        "service_center": "+37495980150",
        "in_reply_to": 0,
        "received_type": "incomming",
        "id_user": 1,
        "replay": {
          "address": "+37494091185",
          "body": "*code5*",
          "date_sent": "2018-06-28 00:00:00",
          "date": "2018-06-28 00:00:00",
          "read": 0,
          "seen": 0,
          "status": 0,
          "type": "unsorted",
          "service_center": "+37495980150",
          "in_reply_to": 0,
          "received_type": "incomming",
          "id_user": 1
        },
      }, {
        "address": "+37494091185",
        "body": "*code5*  How are you",
        "date_sent": "2018-06-28 00:00:00",
        "date": "2018-06-28 00:00:00",
        "read": 0,
        "seen": 0,
        "status": 0,
        "type": "unsorted",
        "service_center": "+37495980150",
        "in_reply_to": 0,
        "received_type": "incomming",
        "id_user": 1,
        "replay": {
          "address": "+37494091185",
          "body": "*code5*",
          "date_sent": "2018-06-28 00:00:00",
          "date": "2018-06-28 00:00:00",
          "read": 0,
          "seen": 0,
          "status": 0,
          "type": "unsorted",
          "service_center": "+37495980150",
          "in_reply_to": 0,
          "received_type": "incomming",
          "id_user": 1
        },
      }, {
        "address": "+37494091185",
        "body": "*code5*",
        "date_sent": "2018-06-28 00:00:00",
        "date": "2018-06-28 00:00:00",
        "read": 0,
        "seen": 0,
        "status": 0,
        "type": "unsorted",
        "service_center": "+37495980150",
        "in_reply_to": 0,
        "received_type": "incomming",
        "id_user": 1,
        "replay": {},
      },
    ]
  }

}
