import { Component } from '@angular/core';
import { NavbarComponent } from "../../Complementos/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth.service';
import { FooterComponent } from "../../Complementos/footer/footer.component";

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [NavbarComponent, CommonModule, FooterComponent]
})
export class InicioComponent {
    constructor(private authService: AuthService) { }

  }

