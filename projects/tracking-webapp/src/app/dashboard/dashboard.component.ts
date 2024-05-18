import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{



  chartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
  ];
  chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  chartOptions = {
    responsive: true,
  };
  chartColors = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    }
  ];
  chartLegend = true;
  chartType = 'line';

  constructor() { }

  ngOnInit(): void { }
}
