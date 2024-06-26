import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { InformacionContactoComponent } from "../informacion-contacto/informacion-contacto.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { FormularioAdminComponent } from "../formulario-admin/formulario-admin.component";
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-contacto',
    standalone: true,
    templateUrl: './contacto.component.html',
    styleUrl: './contacto.component.css',
    imports: [HeroComponent, ContactFormComponent, InformacionContactoComponent, NavbarComponent, FormularioAdminComponent]
})
export class ContactoComponent {
    heroTitle: string = 'Contáctanos';
    heroDescription: string = 'Estamos aquí para ayudarte. Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.';
    showHeroButton: boolean = false; // Controla la visibilidad del botón en el componente ServiciosFinancierosComponent
    isAdmin: boolean = false;


    constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
  }
}
