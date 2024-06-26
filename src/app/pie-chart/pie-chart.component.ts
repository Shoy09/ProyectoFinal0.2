import { AfterViewInit, Component } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent implements AfterViewInit {
  constructor() { }

  ngAfterViewInit() {
    Chart.register(...registerables); // Registrar tipos de gráficos

    const data = {
      labels: ['Chrome', 'Firefox', 'Safari', 'Edge'],
      datasets: [{
        label: 'Usuarios',
        data: [60, 25, 10, 5], // Ejemplo de datos de usuarios por navegador
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }]
    };

    const config: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: data,
      options: {
        indexAxis: 'y' // Grafico de barras horizontal
      }
    };

    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
    new Chart(ctx, config);
  }
}