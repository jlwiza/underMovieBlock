import { Component, OnInit } from '@angular/core';


const SAMPLE_LINECHART_DATA: any[] = [
  {data: [65, 59, 80, 81, 56, 54, 30], label: 'SNOWFALL'},
  {data: [25, 39, 50, 31, 26, 84, 50], label: 'ANNUAL RAINFALL'},
  {data: [60, 171, 91, 34, 28, 63, 24], label: 'CLOUD COVER'}
];

const SAMPLE_LINECHART_LABELS: string[] = ['JAN','FEB','MAR','APR','MAY','JUN','JULY'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }
  public lineChartData: any[] = SAMPLE_LINECHART_DATA;
  public lineChartLabels: string[] = SAMPLE_LINECHART_LABELS;
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartOptions: any = {
    scaleShowVerticalLines:false,
    responsive: true
  };

  ngOnInit() {
  }

}
