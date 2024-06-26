import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminNavbarComponent } from "../admin-navbar/admin-navbar.component";
import { BarChartComponent } from "../bar-chart/bar-chart.component";
import { PieChartComponent } from "../pie-chart/pie-chart.component";

@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    templateUrl: './admin-dashboard.component.html',
    styleUrl: './admin-dashboard.component.css',
    imports: [RouterModule, AdminNavbarComponent, BarChartComponent, PieChartComponent]
})
export class AdminDashboardComponent {

}
