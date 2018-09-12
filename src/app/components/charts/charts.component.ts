import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})

export class ChartsComponent implements OnInit {
  @Input() message;
  public none = 0;
  public thankyou = 0;
  public question = 0;
  public claim = 0;
  public offer = 0;
  public messages = [];
  public allMessages =[];
  public chartHovered;
  public doughnutChartLabels: string[] = ['Նշված չէ', 'Հարց', 'Բողոքը', 'Առաջարկ', 'Շնորհակալություն'];
  public doughnutChartData: number[] = [30, 60, 40, 50, 70];
  public doughnutChartType: string = 'pie';

  constructor(
    public http: HttpService,
  ) { }

  ngOnInit() {
    this.accordingReview();
  }

  accordingReview() {
    this.http.get('/messages/userallmessages')
      .subscribe(
        (messages: any) => {
          messages = messages.body;
          this.none = messages.filter( a => a.status == "none").length;
          this.thankyou = messages.filter(a => a.status == "thankyou").length;
          this.question = messages.filter(a => a.status == "question").length;
          this.claim = messages.filter(a => a.status == "claim").length;
          this.offer = messages.filter(a => a.status == "offer").length;
          this.doughnutChartData = [this.claim, this.none, this.question, this.offer, this.thankyou];                   
        })
  }

  public chartClicked(e: any): void {
  }
  public chartClickedBar(e: any): void {
  }
}