import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [30, 30, 30];
  public doughnutChartType: string = 'pie';

  public barChartLabels: string[] = ['2008', '2010', '2012', '2013', '2014', '2016', '2018'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  public chartClickedBar(e: any): void {
  }

  public chartHoveredBar(e: any): void {
  }

  public randomize(): void {
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
}