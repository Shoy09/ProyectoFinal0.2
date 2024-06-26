import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { FeaturesContactComponent } from "../features-contact/features-contact.component";
import { InformacionContactoComponent } from "../informacion-contacto/informacion-contacto.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { InicioAdminComponent } from "../inicio-admin/inicio-admin.component";
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [HeroComponent, FeaturesContactComponent, InformacionContactoComponent, NavbarComponent, InicioAdminComponent, CommonModule]
})
export class InicioComponent {
    heroTitle: string = 'Bienvenido a Nuestra Página de Finanzas';
    heroDescription: string = 'Proporcionamos soluciones financieras para ayudarte a alcanzar tus metas.';
    showHeroButton: boolean = true; // Controla la visibilidad del botón en el componente ServiciosFinancierosComponent
    isAdmin: boolean = false;

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
      this.isAdmin = this.authService.isAdmin();
    }
  }

