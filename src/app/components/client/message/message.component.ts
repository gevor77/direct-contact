import { Component, OnInit } from '@angular/core';
import {FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  constructor() { }
  panelColor = new FormControl('nolabel');
  myClick(){
    
  }
  ngOnInit() {
  }

}
