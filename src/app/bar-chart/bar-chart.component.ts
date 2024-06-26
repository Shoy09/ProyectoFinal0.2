import { AfterViewInit, Component } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css'
})
export class BarChartComponent implements AfterViewInit {
  constructor() { }

  ngAfterViewInit() {
    Chart.register(...registerables); // Registrar tipos de gráficos

    const data = {
      labels: ['Página de inicio', 'Servicios', 'Empresa', 'Contacto'],
      datasets: [{
        label: 'Vistas de página',
        data: [100, 75, 50, 25], // Ejemplo de datos de vistas
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

    const config: ChartConfiguration<'doughnut'> = {
      type: 'doughnut',
      data: data
    };

    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    new Chart(ctx, config);
  }
}
