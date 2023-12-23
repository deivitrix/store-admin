import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
// import * as Chart from 'chart.js';
import Chart from 'chart.js/auto'
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() chart_info:any;

  chart!: Chart;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initChart();
    });
  }


  ngOnInit() {
  }


  initChart() {
    if(this.chart)
    {
      this.chart.destroy();

    }

    const id=this.chart_info.id;
    const ctx = document.getElementById(id) as HTMLCanvasElement;


   this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio','Julio'],
        datasets: [
          {
            label: this.chart_info.title,
            data: this.chart_info.data,
            borderColor: this.chart_info. borderColor, // Color para la línea 1
            borderWidth: 2
          },
          // {
          //   label: 'Línea 2',
          //   data: [8, 12, 10, 14, 20, 5],
          //   borderColor: 'green',
          //   borderWidth: 2
          // },
          // {
          //   label: 'Línea 3',
          //   data: [12, 10, 14, 18, 22,24],
          //   borderColor: 'blue',
          //   borderWidth: 2
          // }
        ]
      },
      options: {
        maintainAspectRatio:false,
        responsive: true,
      }
    });

  }

  ngOnDestroy() {
    console.log(this.chart);
  console.log('esta destruyendo');

    if(this.chart)
    {
      this.chart.destroy();

    }
  }

}
